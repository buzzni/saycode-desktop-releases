#!/usr/bin/env node
// Builds the Saycode Desktop guidebook (HTML + PDF) from docs/GUIDE*.md.
//   node build.mjs [--version 0.1.50] [--date 2026-01-31] [--no-pdf]
// See README.md for authoring conventions.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Marked } from 'marked';
import { chromium } from 'playwright-core';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.resolve(HERE, '../../docs');
const OUT = path.join(DOCS, 'guidebook');
const REPO = 'https://github.com/buzzni/saycode-desktop-releases';
const POSTER_AT = 0.7; // fraction of the GIF used for the PDF poster frame

const args = process.argv.slice(2);
const flag = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : undefined; };
const NO_PDF = args.includes('--no-pdf');

const LANGS = [
  { code: 'ko', src: 'GUIDE.ko.md', other: 'en',
    t: { pdf: 'PDF 다운로드', toc: '목차', menu: '목차', theme: '테마 전환', otherLang: 'English', home: '가이드 홈', repo: 'GitHub 저장소', version: '버전', updated: '업데이트',
         anim: '애니메이션은 온라인 가이드에서 볼 수 있습니다', footer: 'Saycode Desktop 가이드북',
         callouts: { note: '참고', tip: '팁', important: '중요', warning: '주의', caution: '경고' } } },
  { code: 'en', src: 'GUIDE.md', other: 'ko',
    t: { pdf: 'Download PDF', toc: 'Contents', menu: 'Contents', theme: 'Toggle theme', otherLang: '한국어', home: 'Guidebook home', repo: 'GitHub repository', version: 'Version', updated: 'Updated',
         anim: 'Animated in the online guide', footer: 'Saycode Desktop Guidebook',
         callouts: { note: 'Note', tip: 'Tip', important: 'Important', warning: 'Warning', caution: 'Caution' } } },
];

const svg = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const ICONS = {
  menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  download: svg('<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/>'),
  moon: svg('<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>'),
  sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  note: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
  tip: svg('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>'),
  important: svg('<path d="M4 5h16v11H9l-5 4z"/><path d="M12 8v3M12 13.5h.01"/>'),
  warning: svg('<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>'),
  caution: svg('<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8z"/><path d="M12 8v5M12 16h.01"/>'),
};

// ---------- helpers ----------
const die = (msg) => { console.error(`\nERROR: ${msg}`); process.exit(1); };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const unesc = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const stripTags = (s) => unesc(s.replace(/<[^>]*>/g, ''));
const slugify = (s) => s.trim().toLowerCase().replace(/[^\p{L}\p{N}\p{M}\p{Pc}\- ]/gu, '').replace(/ /g, '-') || 'section';
const read = (f) => fs.readFileSync(path.join(HERE, f), 'utf8');
const fill = (tpl, vars) => tpl.replace(/\{\{([\w.]+)\}\}/g, (_, k) => {
  const v = k.split('.').reduce((o, p) => (o == null ? o : o[p]), vars);
  if (v == null) die(`template placeholder {{${k}}} has no value`);
  return v;
});
const fmtSize = (f) => (fs.existsSync(f) ? `${(fs.statSync(f).size / 1048576).toFixed(1)} MB` : '');

function parseAttrs(tag) {
  const a = {};
  for (const m of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) a[m[1].toLowerCase()] = m[2] ?? m[3];
  return a;
}
const isExternal = (u) => /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(u);

// ---------- markdown -> tokens (header extraction, cleanup) ----------
function parseGuide(lang) {
  const file = path.join(DOCS, lang.src);
  if (!fs.existsSync(file)) die(`${lang.src} not found in docs/`);
  let md = fs.readFileSync(file, 'utf8');

  const stamp = {};
  const sm = md.match(/<!--\s*guidebook:([\s\S]*?)-->/);
  if (sm) for (const m of sm[1].matchAll(/(\w+)\s*=\s*("[^"]*"|\S+)/g)) stamp[m[1]] = m[2].replace(/^"|"$/g, '');

  // GitHub-style alerts -> marker comments (resolved by the blockquote renderer)
  md = md.replace(/^(>[ \t]*)\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*$/gim, (_, p, k) => `${p}<!--callout:${k.toLowerCase()}-->`);

  const tokens = new Marked().lexer(md);
  const nonSpace = (i) => { while (tokens[i] && tokens[i].type === 'space') i++; return i; };

  // Header block: everything before the first hr / h2.
  let end = tokens.findIndex((t) => t.type === 'hr' || (t.type === 'heading' && t.depth >= 2));
  if (end < 0) end = tokens.length;
  const head = { title: null, subtitle: null, notes: [], icon: null };
  const keep = [];
  const inline = (t) => new Marked().parseInline(t.text).replace(/<\/?strong>/g, '');
  for (const t of tokens.slice(0, end)) {
    const raw = t.raw || '';
    if (t.type === 'space') continue;
    if (t.type === 'html' && /^\s*<\/?div\b[^>]*>\s*$/i.test(raw)) continue;
    if (/<img\b|!\[/.test(raw) && !head.icon && t.type !== 'heading') {
      head.icon = (raw.match(/src\s*=\s*["']([^"']+)["']/) || raw.match(/!\[[^\]]*\]\(([^)\s]+)/) || [])[1];
      continue;
    }
    if (t.type === 'heading' && t.depth === 1 && !head.title) { head.title = stripTags(new Marked().parseInline(t.text)); continue; }
    if (t.type === 'paragraph' && /\]\((?:\.\/)?GUIDE[\w.-]*\.md\)/.test(raw)) continue; // language switch line
    if (t.type === 'paragraph' && head.title) { // first line = subtitle, any further lines = small notes
      for (const line of t.text.split('\n').filter(Boolean)) {
        const html = inline({ text: line });
        if (head.subtitle) head.notes.push(html); else head.subtitle = html;
      }
      continue;
    }
    keep.push(t);
  }
  if (!head.title) die(`${lang.src}: no "# Title" (h1) found in the header`);
  tokens.splice(0, end, ...keep);

  // Drop a hand-written table of contents (we generate our own).
  const isToc = (t) => t.type === 'heading' && t.depth === 2 && /^(contents|table of contents|목차|차례)$/i.test(t.text.trim());
  const ti = tokens.findIndex(isToc);
  if (ti >= 0) {
    let j = ti + 1;
    while (j < tokens.length && !(tokens[j].type === 'hr' || (tokens[j].type === 'heading' && tokens[j].depth <= 2))) j++;
    tokens.splice(ti, j - ti);
  }
  // Remove separator hrs that sit in front of a chapter heading (and at the very start); centre blocks.
  for (let i = tokens.length - 1; i >= 0; i--) {
    const t = tokens[i];
    if (t.type === 'hr') {
      const n = tokens[nonSpace(i + 1)];
      if (!n || i === 0 || (n.type === 'heading' && n.depth === 2)) tokens.splice(i, 1);
    } else if (t.type === 'html' && /^\s*<div\s+align=["']center["']\s*>\s*$/i.test(t.raw)) {
      t.text = t.raw = '<div class="center">\n';
    }
  }

  const version = flag('version') || stamp.version || (head.notes.join(' ') + ' ' + (head.subtitle || '')).match(/v(\d+\.\d+\.\d+)/)?.[1] || '';
  const date = flag('date') || stamp.date || new Date().toISOString().slice(0, 10);
  return { ...lang, tokens, head, version: version.replace(/^v/i, ''), date };
}

// ---------- tokens -> HTML ----------
function renderBody(guide, mode, ctx) {
  const headings = [];
  const used = new Map();
  const m = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        let id = slugify(stripTags(inner));
        const n = used.get(id) || 0; used.set(id, n + 1);
        if (n) id += `-${n}`;
        headings.push({ depth, id, html: inner, text: stripTags(inner) });
        return `<h${depth} id="${esc(id)}">${inner}<a class="anchor" href="#${esc(id)}" aria-label="Link">#</a></h${depth}>\n`;
      },
      html({ text }) { // a raw <img> line is an image-only paragraph, same as ![](...)
        return /^\s*(<img\b[^>]*>\s*)+$/i.test(text) ? `<p>${text.trim()}</p>\n` : text;
      },
      blockquote({ tokens }) {
        const first = tokens[0];
        const k = first?.type === 'html' && first.raw.match(/<!--callout:(\w+)-->/)?.[1];
        if (!k) return `<blockquote>\n${this.parser.parse(tokens)}</blockquote>\n`;
        const body = this.parser.parse(tokens.slice(1));
        return `<div class="callout callout-${k}"><p class="callout-title">${ICONS[k]}<span>${esc(guide.t.callouts[k])}</span></p>\n${body}</div>\n`;
      },
    },
  });
  let html = m.parser(guide.tokens);

  // images: validate, rewrite, normalise
  html = html.replace(/<img\b[^>]*>/gi, (tag) => {
    const a = parseAttrs(tag);
    if (!a.src) die(`${guide.src}: <img> without src: ${tag}`);
    if (isExternal(a.src) && !a.src.startsWith('#')) return tag; // remote image: leave as-is
    const abs = path.resolve(DOCS, decodeURI(a.src.split(/[?#]/)[0]));
    if (!fs.existsSync(abs)) die(`${guide.src}: image not found: ${a.src}`);
    let src = path.relative(DOCS, abs).split(path.sep).map(encodeURIComponent).join('/');
    if (mode === 'print' && /\.gif$/i.test(abs)) {
      ctx.gifs.add(abs);
      src = `guidebook/posters/${path.basename(abs, '.gif')}.png`;
      a['data-anim'] = '1';
    }
    const base = mode === 'print' ? pathToFileURL(DOCS).href + '/' : '../../';
    const w = (a.width || '').match(/^(\d+)/)?.[1];
    return `<img src="${base}${src}" alt="${a.alt ?? ''}"${w ? ` data-w="${w}"` : ''}${a['data-anim'] ? ' data-anim="1"' : ''}${mode === 'web' ? ' loading="lazy" decoding="async"' : ''}>`;
  });

  // figures: an image-only paragraph (or raw <img> line) becomes a card; an italic-only line right
  // after it (same or next paragraph) is the caption, otherwise the alt text is.
  const IMGS = '(?:<img\\b[^>]*>\\s*)+';
  const CAP = '<em>((?:(?!</?em>).)*)</em>';
  const figRe = new RegExp(`<p>\\s*(${IMGS})(?:${CAP}\\s*)?</p>(?:\\s*<p>${CAP}</p>)?`, 'gs');
  html = html.replace(figRe, (_, list, cap1, cap2) => {
    const cap = cap1 ?? cap2;
    const imgs = [...list.matchAll(/<img\b[^>]*>/g)].map((x) => x[0]);
    const alts = imgs.map((i) => parseAttrs(i).alt).filter(Boolean);
    const w = Math.max(...imgs.map((i) => +(parseAttrs(i)['data-w'] || 0)));
    const anim = mode === 'print' && imgs.some((i) => i.includes('data-anim'));
    const caption = cap ?? alts.join(' · ');
    const note = anim ? `<span class="anim-note">${esc(guide.t.anim)}</span>` : '';
    return `<figure class="fig"${w ? ` style="--w:${w}px"` : ''}><div class="imgs">${imgs.join('')}</div>${caption || note ? `<figcaption>${caption}${note}</figcaption>` : ''}</figure>`;
  });

  // tables, links, video
  html = html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>');
  html = html.replace(/<a\s([^>]*)>/g, (tag, attrs) => {
    const href = parseAttrs(tag).href;
    if (!href) return tag;
    if (href.startsWith('#')) return tag;
    if (/^https?:/i.test(href)) return `<a ${attrs} target="_blank" rel="noopener">`;
    if (isExternal(href)) return tag;
    const clean = href.split(/[?#]/)[0];
    const hash = href.includes('#') ? '#' + href.split('#')[1] : '';
    const guideMatch = LANGS.find((l) => l.src === path.basename(clean));
    if (guideMatch) return tag.replace(href, mode === 'print' ? hash || '#' : `../${guideMatch.code}/index.html${hash}`);
    const abs = path.resolve(DOCS, decodeURI(clean));
    if (!fs.existsSync(abs)) die(`${guide.src}: link target not found: ${href}`);
    const rel = path.relative(DOCS, abs).split(path.sep).join('/');
    const target = rel.startsWith('assets/') && mode === 'web' ? `../../${rel}` : `${REPO}/blob/main/docs/${rel}`;
    return tag.replace(href, target + hash);
  });
  html = html.replace(/(<(?:video|source)\b[^>]*?\ssrc=")([^":]+)"/g, (_, pre, src) => {
    if (!fs.existsSync(path.resolve(DOCS, src))) die(`${guide.src}: media not found: ${src}`);
    return `${pre}../../${src}"`;
  });

  // sanity: internal anchors must resolve
  const ids = new Set(headings.map((h) => h.id));
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
    if (id !== 'top' && !ids.has(decodeURIComponent(id))) console.warn(`  warn [${guide.code}] broken anchor link: #${id}`);
  }
  return { html, headings };
}

function tocHtml(headings, cls = '') {
  return headings.filter((h) => h.depth === 2 || h.depth === 3)
    .map((h) => `<li class="${h.depth === 2 ? 'h2' : 'sub'}"><a href="#${esc(h.id)}">${h.html.replace(/<a\b[^>]*>|<\/a>/g, '')}</a></li>`).join('\n');
}

// ---------- posters (PDF only) ----------
function ffmpegBin() {
  for (const b of [process.env.FFMPEG, 'ffmpeg', '/opt/homebrew/bin/ffmpeg'].filter(Boolean)) {
    if (spawnSync(b, ['-version']).status === 0) return b;
  }
  die('ffmpeg not found (set FFMPEG=/path/to/ffmpeg)');
}
function makePosters(gifs) {
  const dir = path.join(OUT, 'posters');
  fs.mkdirSync(dir, { recursive: true });
  const wanted = new Set();
  const ff = ffmpegBin();
  for (const gif of gifs) {
    const out = path.join(dir, path.basename(gif, '.gif') + '.png');
    wanted.add(path.basename(out));
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(gif).mtimeMs) continue;
    const probe = spawnSync(ff.replace(/ffmpeg$/, 'ffprobe'), ['-v', 'error', '-count_frames', '-select_streams', 'v:0', '-show_entries', 'stream=nb_read_frames', '-of', 'csv=p=0', gif], { encoding: 'utf8' });
    const frames = parseInt(probe.stdout, 10);
    const n = frames > 1 ? Math.floor((frames - 1) * POSTER_AT) : 0;
    const r = spawnSync(ff, ['-y', '-v', 'error', '-i', gif, '-vf', `select=eq(n\\,${n})`, '-frames:v', '1', '-compression_level', '9', out]);
    if (r.status !== 0 || !fs.existsSync(out)) die(`ffmpeg failed for ${gif}: ${r.stderr}`);
    console.log(`  poster ${path.basename(out)} (frame ${n + 1}/${frames || '?'})`);
  }
  for (const f of fs.readdirSync(dir)) if (!wanted.has(f)) fs.rmSync(path.join(dir, f));
}

// ---------- PDF ----------
async function launch() {
  const opts = process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' };
  try { return await chromium.launch(opts); }
  catch (e) { die(`Could not start system Chrome (${e.message.split('\n')[0]}). Install Google Chrome or set CHROME_PATH.`); }
}
async function renderPdfs(jobs) {
  const browser = await launch();
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'guidebook-'));
  try {
    for (const job of jobs) {
      const f = path.join(tmp, `${job.code}.html`);
      fs.writeFileSync(f, job.html);
      const ctxt = await browser.newContext({ colorScheme: 'light' });
      const page = await ctxt.newPage();
      await page.goto(pathToFileURL(f).href, { waitUntil: 'load' });
      await page.emulateMedia({ media: 'print', colorScheme: 'light' });
      const broken = await page.evaluate(async () => {
        await document.fonts.ready;
        return (await Promise.all([...document.images].map((i) => i.complete ? (i.naturalWidth ? null : i.src) : new Promise((r) => { i.onload = () => r(null); i.onerror = () => r(i.src); })))).filter(Boolean);
      });
      if (broken.length) die(`[${job.code}] images failed to load for PDF:\n  ${broken.join('\n  ')}`);
      await page.pdf({ path: job.out, preferCSSPageSize: true, printBackground: true, outline: true, tagged: true });
      await ctxt.close();
      console.log(`  ${path.relative(process.cwd(), job.out)}  ${fmtSize(job.out)}`);
    }
  } finally { await browser.close(); fs.rmSync(tmp, { recursive: true, force: true }); }
}

// ---------- main ----------
const baseCss = read('base.css'), webCss = read('web.css'), js = read('guide.js');
const tplWeb = read('template.html'), tplPrint = read('print.html'), tplLanding = read('landing.html');
const guides = LANGS.map(parseGuide);
const ctx = { gifs: new Set() };
const pdfName = (code) => `saycode-guidebook-${code}.pdf`;
const pdfJobs = [];

for (const g of guides) {
  const other = guides.find((x) => x.code === g.other);
  const icon = g.head.icon || 'assets/icon.png';
  if (!fs.existsSync(path.join(DOCS, icon))) die(`${g.src}: icon not found: ${icon}`);
  const shortTitle = g.head.title;
  const meta = [g.version && `${g.t.version} ${g.version}`, g.date].filter(Boolean).join(' · ');
  const notes = g.head.notes.map((n) => `<p class="note">${n}</p>`).join('');
  const stampChips = [g.version && `v${g.version}`, g.date].filter(Boolean).map((c) => `<span class="chip">${esc(c)}</span>`).join('');

  const web = renderBody(g, 'web', ctx);
  const vars = {
    lang: g.code, title: esc(g.head.title), shortTitle: esc(shortTitle), description: esc(stripTags(g.head.subtitle || g.head.title)),
    heading: esc(g.head.title), subtitle: g.head.subtitle || '', notes, chips: stampChips, t: g.t, icons: ICONS, repo: REPO,
    icon: `../../${icon}`, pdfHref: `../${pdfName(g.code)}`, otherHref: `../${other.code}/index.html`, otherLang: other.code, landingHref: '../index.html',
    toc: tocHtml(web.headings), body: web.html, css: baseCss + '\n' + webCss, js,
    footerLeft: esc(`${g.t.footer}${meta ? ' · ' + meta : ''}`),
  };
  fs.mkdirSync(path.join(OUT, g.code), { recursive: true });
  fs.writeFileSync(path.join(OUT, g.code, 'index.html'), fill(tplWeb, vars));
  console.log(`built guidebook/${g.code}/index.html  (${web.headings.filter((h) => h.depth === 2).length} chapters)`);

  const print = renderBody(g, 'print', ctx);
  const fileUrl = pathToFileURL(DOCS).href + '/';
  g.print = fill(tplPrint, {
    ...vars, icon: fileUrl + icon, toc: tocHtml(print.headings), body: print.html, meta: esc(meta), subtitle: g.head.subtitle || '',
    css: baseCss + '\n' + fill(read('print.css'), { footerText: `${g.t.footer}${g.version ? ' · v' + g.version : ''}`.replace(/["\\]/g, '') }),
  });
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(DOCS, '.nojekyll'), '');
if (!NO_PDF) {
  makePosters(ctx.gifs);
  await renderPdfs(guides.map((g) => ({ code: g.code, html: g.print, out: path.join(OUT, pdfName(g.code)) })));
}

// landing page
const cards = guides.map((g) => {
  const size = fmtSize(path.join(OUT, pdfName(g.code)));
  return `    <div class="card">
      <span class="lang">${g.code === 'ko' ? '한국어' : 'English'}</span>
      <h2>${esc(g.head.title)}</h2>
      <p>${g.head.subtitle || ''}</p>
      <div class="row">
        <a class="btn btn-primary" href="${g.code}/index.html">${g.code === 'ko' ? '웹으로 읽기' : 'Read online'}</a>
        <a class="btn" href="${pdfName(g.code)}" download>${ICONS.download}${g.t.pdf}${size ? ` · ${size}` : ''}</a>
      </div>
      <div class="stamp">${esc([g.version && 'v' + g.version, g.date].filter(Boolean).join(' · '))}</div>
    </div>`;
}).join('\n');
fs.writeFileSync(path.join(OUT, 'index.html'), fill(tplLanding, {
  css: baseCss + '\n' + webCss, icons: ICONS, cards, repo: REPO,
  stamp: `© Buzzni · ${guides[0].version ? 'v' + guides[0].version + ' · ' : ''}${guides[0].date}`,
}));
console.log('built guidebook/index.html');
