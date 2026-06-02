/* ============================================================
   PeçaFácil Landing — motion
   ============================================================ */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- header slides in after hero ---- */
  var header = document.getElementById('header');
  var hero = document.querySelector('.hero');
  function onScroll() {
    if (!header) return;
    var threshold = hero ? hero.offsetHeight - 90 : 520;
    header.classList.toggle('show', window.scrollY > threshold);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---- count-up helper ---- */
  function fmt(n) { return n.toLocaleString('pt-BR'); }
  function countUp(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var target = parseFloat(el.dataset.count);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = prefix + fmt(target) + suffix; return; }
    var dur = 1200, start = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = prefix + fmt(val) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- reveal + triggers via IntersectionObserver ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var t = e.target;
      if (t.classList.contains('reveal')) t.classList.add('in');
      // counters inside
      t.querySelectorAll && t.querySelectorAll('[data-count]').forEach(countUp);
      if (t.hasAttribute && t.hasAttribute('data-count')) countUp(t);
      // category bars
      t.querySelectorAll && t.querySelectorAll('.cat-row .bar > i[data-w]').forEach(function (b) {
        b.style.width = b.dataset.w + '%';
      });
      // dashboard chart draw
      if (t.classList && t.classList.contains('browser')) drawChart(t);
      io.unobserve(t);
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, [data-count], .browser').forEach(function (el) { io.observe(el); });

  /* ---- dashboard line chart draw-on ---- */
  function drawChart(root) {
    var line = root.querySelector('#line');
    var area = root.querySelector('#area');
    if (!line) return;
    if (reduce) { if (area) area.style.opacity = 1; return; }
    var len = line.getTotalLength();
    line.style.strokeDasharray = len;
    line.style.strokeDashoffset = len;
    line.getBoundingClientRect();
    line.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(0.16,1,0.3,1)';
    line.style.strokeDashoffset = '0';
    if (area) { area.style.transition = 'opacity 1.2s ease'; setTimeout(function () { area.style.opacity = 1; }, 500); }
  }

  /* ---- hero vehicle scan: cycle through parts while counting ---- */
  var nEl = document.getElementById('scanN');
  var barEl = document.getElementById('scanBar');
  var partNow = document.getElementById('partNow');
  var partName = document.getElementById('partName');
  var partCat = document.getElementById('partCat');
  var partPrice = document.getElementById('partPrice');
  var partIco = document.getElementById('partIco');
  var TOTAL = 47;

  var ICO = {
    cog: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
    sliders: '<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',
    piston: '<rect x="8" y="3" width="8" height="7" rx="1"/><path d="M12 10v6"/><path d="M9.5 21h5"/><path d="M10 16h4"/>',
    link: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>',
    wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    bulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.1 14c.2-1 .6-1.7 1.4-2.5A4.6 4.6 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.2 1.5 1.4 2.5"/>',
    grille: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8.5 4v16M12 4v16M15.5 4v16"/>'
  };
  // px/py = position on the car as % of stage width/height
  var PARTS = [
    { n: 'Motor 1.6',      c: 'Mecânica',      p: 'R$ 2.400', i: 'cog',     px: 27, py: 50 },
    { n: 'Câmbio',         c: 'Transmissão',   p: 'R$ 1.850', i: 'sliders', px: 37, py: 61 },
    { n: 'Pistão',         c: 'Mecânica',      p: 'R$ 180',   i: 'piston',  px: 24, py: 38 },
    { n: 'Biela',          c: 'Mecânica',      p: 'R$ 140',   i: 'link',    px: 29, py: 62 },
    { n: 'Roda de liga',   c: 'Suspensão',     p: 'R$ 320',   i: 'wheel',   px: 33, py: 79 },
    { n: 'Alternador',     c: 'Elétrica',      p: 'R$ 420',   i: 'zap',     px: 22, py: 31 },
    { n: 'Farol dianteiro',c: 'Iluminação',    p: 'R$ 280',   i: 'bulb',    px: 21, py: 72 },
    { n: 'Radiador',       c: 'Arrefecimento', p: 'R$ 390',   i: 'grille',  px: 20, py: 50 }
  ];
  function svgWrap(d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  }

  function addMarker(px, py, name) {
    var markers = document.getElementById('partMarkers');
    if (!markers) return;
    var dot = document.createElement('div');
    dot.className = 'part-dot';
    dot.style.left = px + '%'; dot.style.top = py + '%';
    var pin = document.createElement('div');
    pin.className = 'part-pin';
    pin.style.left = px + '%'; pin.style.top = py + '%';
    pin.textContent = name;
    markers.appendChild(dot);
    markers.appendChild(pin);
  }

  function clearMarkers() {
    var m = document.getElementById('partMarkers');
    if (m) m.innerHTML = '';
  }

  function showPart(idx) {
    if (!partName) return;
    var pt = PARTS[idx % PARTS.length];
    partName.textContent = pt.n;
    partCat.textContent = pt.c;
    partPrice.textContent = pt.p;
    if (partIco) partIco.innerHTML = svgWrap(ICO[pt.i]);
    if (partNow) { partNow.classList.remove('flip'); void partNow.offsetWidth; partNow.classList.add('flip'); }
    addMarker(pt.px, pt.py, pt.n);
  }

  function runScan() {
    if (!nEl || !barEl) return;
    if (reduce) {
      nEl.textContent = TOTAL; barEl.style.width = '100%'; showPart(0);
      return;
    }
    clearMarkers();
    var c = 0, pi = 0;
    showPart(0);
    var swapEvery = Math.floor(TOTAL / PARTS.length); // ~5
    var t = setInterval(function () {
      c++;
      nEl.textContent = c;
      barEl.style.width = (c / TOTAL * 100) + '%';
      if (c % swapEvery === 0 && c < TOTAL) { pi++; showPart(pi); }
      if (c >= TOTAL) {
        clearInterval(t);
        setTimeout(runScan, 2800); // loop
      }
    }, 58);
  }

  // start scan when hero visual first visible
  var scanner = document.getElementById('scanner');
  if (scanner) {
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runScan(); sio.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    sio.observe(scanner);
  }

  /* ---- single-open FAQ ---- */
  var faqs = document.querySelectorAll('.faq details');
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  /* ---- interactive CTA: type a plate, watch it catalogue ---- */
  (function () {
    var form = document.getElementById('ctaForm');
    if (!form) return;
    var input = document.getElementById('plateInput');
    var go = document.getElementById('ctaGo');
    var result = document.getElementById('ctaResult');
    var ctarVeh = document.getElementById('ctarVeh');
    var ctarN = document.getElementById('ctarN');
    var ctarBar = document.getElementById('ctarBar');
    var ctarChips = document.getElementById('ctarChips');
    var ctarValue = document.getElementById('ctarValue');
    var examples = document.querySelectorAll('.cta-examples .ex');

    var VEHICLES = {
      ABC1D23: { v: 'VW Gol 1.6 · 2014', total: 47, value: 18240 },
      GOL2014: { v: 'VW Gol 1.0 · 2014', total: 43, value: 15980 },
      HB20XYZ: { v: 'Hyundai HB20 · 2018', total: 51, value: 21450 }
    };
    var CHIPS = ['Motor', 'Câmbio', 'Pistão', 'Biela', 'Roda de liga', 'Alternador', 'Farol dianteiro', 'Radiador', 'Parachoque', 'Capô', 'Painel', 'Bateria'];

    var busy = false;
    function fmt(n) { return 'R$ ' + n.toLocaleString('pt-BR'); }

    function run(plate) {
      if (busy) return;
      var key = plate.replace(/[^A-Z0-9]/gi, '').toUpperCase();
      var data = VEHICLES[key] || { v: 'Veículo identificado', total: 46, value: 17300 };
      busy = true;
      go.classList.add('loading');
      result.hidden = true;

      setTimeout(function () {
        go.classList.remove('loading');
        result.hidden = false;
        ctarVeh.textContent = data.v;
        ctarChips.innerHTML = '';
        var total = data.total;
        if (reduce) {
          ctarN.textContent = total; ctarBar.style.width = '100%'; ctarValue.textContent = fmt(data.value);
          CHIPS.forEach(function (c) { var s = document.createElement('span'); s.className = 'ctar-chip'; s.style.animation = 'none'; s.style.opacity = 1; s.style.transform = 'none'; s.textContent = c; ctarChips.appendChild(s); });
          busy = false; return;
        }
        var c = 0, ci = 0;
        var chipEvery = Math.max(1, Math.floor(total / CHIPS.length));
        var t = setInterval(function () {
          c++;
          ctarN.textContent = c;
          ctarBar.style.width = (c / total * 100) + '%';
          ctarValue.textContent = fmt(Math.round(data.value * c / total));
          if (c % chipEvery === 0 && ci < CHIPS.length) {
            var s = document.createElement('span'); s.className = 'ctar-chip';
            s.style.animationDelay = '0s'; s.textContent = CHIPS[ci++];
            ctarChips.appendChild(s);
          }
          if (c >= total) { clearInterval(t); ctarValue.textContent = fmt(data.value); busy = false; }
        }, 45);
      }, 620);
    }

    form.addEventListener('submit', function (e) { e.preventDefault(); run(input.value || 'ABC1D23'); });
    input.addEventListener('input', function () { input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7); });
    examples.forEach(function (b) {
      b.addEventListener('click', function () { input.value = b.dataset.p; run(b.dataset.p); });
    });
  })();
})();
