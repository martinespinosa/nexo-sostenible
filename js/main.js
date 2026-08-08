(function () {
  'use strict';

  var menuToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  var navLinks = nav ? nav.querySelectorAll('a') : [];
  var yearEl = document.getElementById('footer-year');

  function closeMenu() {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    nav.classList.remove('site-nav--open');
    document.body.classList.remove('menu-open');
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Abrir menú de navegación' : 'Cerrar menú de navegación'
      );
      nav.classList.toggle('site-nav--open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
