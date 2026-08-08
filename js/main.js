(function () {
  'use strict';

  var menuToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  var navLinks = nav ? nav.querySelectorAll('a') : [];
  var yearEl = document.getElementById('footer-year');
  var mobileMenuQuery = window.matchMedia('(max-width: 767px)');

  function isMenuOpen() {
    return menuToggle && menuToggle.getAttribute('aria-expanded') === 'true';
  }

  function setBodyMenuLock(locked) {
    if (mobileMenuQuery.matches) {
      document.body.classList.remove('menu-open');
      return;
    }

    document.body.classList.toggle('menu-open', locked);
  }

  function openMenu() {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
    nav.classList.add('site-nav--open');
    setBodyMenuLock(true);
  }

  function closeMenu() {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    nav.classList.remove('site-nav--open');
    setBodyMenuLock(false);
  }

  function toggleMenu() {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function scrollToInicio() {
    var behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, left: 0, behavior: behavior });
    if (window.history.replaceState) {
      window.history.replaceState(null, '', '#inicio');
    }
  }

  function handleNavLinkClick(event, link) {
    if (link.getAttribute('href') === '#inicio') {
      event.preventDefault();
      closeMenu();
      scrollToInicio();
      return;
    }

    closeMenu();
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', function (event) {
      if (!isMenuOpen()) return;
      if (event.target.closest('.nav-toggle') || event.target.closest('.site-nav')) return;
      closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isMenuOpen()) {
        closeMenu();
      }
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        handleNavLinkClick(event, link);
      });
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (window.location.hash === '#inicio') {
    window.scrollTo(0, 0);
  }
})();
