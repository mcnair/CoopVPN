/*
  Tiny, dependency-free JS:
  - Language dropdown toggling
  - Reveal-on-scroll helper (optional; safe if JS disabled)
*/
(function () {
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  // Language dropdown
  var lang = qs('.lang');
  if (lang) {
    var button = qs('.lang-button', lang);
    var close = function () { lang.classList.remove('is-open'); if (button) button.setAttribute('aria-expanded', 'false'); };

    if (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        var open = lang.classList.toggle('is-open');
        button.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    document.addEventListener('click', function (e) {
      if (!lang.contains(e.target)) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  // Reveal elements as they enter viewport
  var items = qsa('.reveal');
  if (items.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    items.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: just mark visible
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
