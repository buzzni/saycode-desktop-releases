(function () {
  var doc = document, root = doc.documentElement, body = doc.body;
  var KEY = 'saycode-guidebook-theme';

  // Theme toggle (explicit choice overrides prefers-color-scheme)
  function effectiveTheme() {
    return root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  doc.querySelectorAll('.theme-toggle').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  });

  // Mobile menu
  var menuBtn = doc.querySelector('.menu-toggle');
  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(open));
  }
  if (menuBtn) menuBtn.addEventListener('click', function () { setMenu(!body.classList.contains('menu-open')); });
  doc.querySelectorAll('.toc a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Scroll-spy
  var links = {}, heads = [];
  doc.querySelectorAll('.toc a[href^="#"]').forEach(function (a) { links[decodeURIComponent(a.getAttribute('href').slice(1))] = a; });
  doc.querySelectorAll('.content h2[id], .content h3[id]').forEach(function (h) { heads.push(h); });
  var toc = doc.querySelector('.toc'), current = null, ticking = false;
  function spy() {
    ticking = false;
    var off = window.innerWidth <= 860 ? 90 : 60, active = null;
    for (var i = 0; i < heads.length; i++) { if (heads[i].getBoundingClientRect().top <= off) active = heads[i]; else break; }
    if (active === current) return;
    current = active;
    Object.keys(links).forEach(function (k) { links[k].classList.remove('active'); });
    doc.querySelectorAll('.toc li.sub.show').forEach(function (li) { li.classList.remove('show'); });
    if (!active) return;
    var link = links[active.id];
    if (!link) return;
    link.classList.add('active');
    var li = link.parentElement, parent = active.tagName === 'H3' ? li.previousElementSibling : li;
    while (parent && parent.classList.contains('sub')) parent = parent.previousElementSibling;
    if (parent) {
      var n = parent.nextElementSibling;
      while (n && n.classList.contains('sub')) { n.classList.add('show'); n = n.nextElementSibling; }
    }
    // keep the active entry visible inside the (scrollable) sidebar without moving the page
    if (toc && toc.offsetParent && toc.scrollHeight > toc.clientHeight) {
      var r = link.getBoundingClientRect(), t = toc.getBoundingClientRect();
      if (r.top < t.top + 20 || r.bottom > t.bottom - 20) toc.scrollTop += r.top - t.top - t.height / 3;
    }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  window.addEventListener('resize', spy);
  spy();

  // Click-to-zoom lightbox
  var lb = doc.createElement('div');
  lb.className = 'lightbox'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true');
  lb.innerHTML = '<button type="button" aria-label="Close">&times;</button><img alt=""><p></p>';
  body.appendChild(lb);
  var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('p');
  function closeLb() { lb.classList.remove('open'); lbImg.removeAttribute('src'); }
  doc.querySelectorAll('.content img').forEach(function (img) {
    img.addEventListener('click', function () {
      var cap = img.closest('figure') && img.closest('figure').querySelector('figcaption');
      lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt;
      lbCap.textContent = cap ? cap.firstChild.textContent : img.alt;
      lb.classList.add('open');
    });
  });
  lb.addEventListener('click', closeLb);
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeLb(); setMenu(false); } });
})();
