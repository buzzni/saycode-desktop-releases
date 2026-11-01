# Saycode guidebook builder

Turns `docs/GUIDE.ko.md` and `docs/GUIDE.md` into a web guidebook and an A4 PDF.

```bash
cd tools/guidebook
npm ci
npm run build                      # HTML + PDF (needs Google Chrome and ffmpeg)
npm run build:html                 # HTML only (no Chrome/ffmpeg needed)
node build.mjs --version 0.1.82 --date 2026-02-01   # override the version/date stamp
```

Requirements: Node 22, Google Chrome (system install, used through `playwright-core`; no browser
is downloaded; set `CHROME_PATH` to use another binary) and `ffmpeg` (in `PATH`, `/opt/homebrew/bin`,
or `FFMPEG=/path`). The build exits with an error if an image or link target is missing.

## Output (committed, regenerate after every edit of the guide)

| File | What |
|---|---|
| `docs/guidebook/index.html` | landing page: language choice + PDF downloads |
| `docs/guidebook/{ko,en}/index.html` | single-page guidebook (sticky TOC, dark/light, lightbox) |
| `docs/guidebook/saycode-guidebook-{ko,en}.pdf` | A4 PDF: cover, contents, chapters, page numbers, bookmarks |
| `docs/guidebook/posters/*.png` | one still frame (70% in) per referenced GIF, used **only** in the PDF |
| `docs/.nojekyll` | lets GitHub Pages serve the files as-is |

Images are referenced by relative path into `docs/assets/`, so pages work on GitHub Pages
(serving `/docs`) and from a local clone via `file://`. Nothing in `docs/assets/` is modified.

## Authoring conventions (the build is generic: any headings / images work)

- **Title block** at the top: icon `<img>`, one `# H1`, a first paragraph (its first line is the
  subtitle, further lines become small notes), optionally inside `<div align="center">`.
  A line linking to `GUIDE*.md` (the language switch) is dropped from the guidebook.
- `## ` = chapter (new page in the PDF, top level in the TOC), `### ` = section (nested in the TOC).
  Heading ids use GitHub's slug rules, so `[x](#1-install-and-first-run)` links keep working.
- A hand-written `## Contents` / `## 목차` section is removed (the TOC is generated).
- **Figures**: an image alone in a paragraph (`<img src="assets/x.png" alt="...">` or
  `![alt](assets/x.png)`) becomes a card. **Caption = the alt text**, unless the image is
  immediately followed by an italic-only line (`*Caption text*`), which is used instead.
  `width="480"` on the `<img>` caps the card width (px). Several images in one paragraph
  become one side-by-side card. Images inside tables/lists/sentences stay inline.
- **Callouts**: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`
  (the marker on its own line; GitHub renders these too).
- **Version/date**: `<!-- guidebook: version=0.1.82 date=2026-02-01 -->` anywhere in the file, or
  `--version` / `--date`. Without them the version is taken from a `vX.Y.Z` in the title block and the
  date is today. Pass `--date` for reproducible output.
- Links to `GUIDE.md` / `GUIDE.ko.md` point to the matching guidebook page; other relative links
  point to the file on GitHub (`main` branch).

## Layout

`build.mjs` (all logic) · `base.css` (tokens, prose) · `web.css` (page layout) · `print.css` (PDF) ·
`template.html` / `print.html` / `landing.html` · `guide.js` (theme toggle, scroll-spy, menu, lightbox).
