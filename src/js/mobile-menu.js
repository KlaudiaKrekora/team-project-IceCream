(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuBox = document.querySelector('.menu-backdrop');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const buyButton = document.querySelector('.header-buttons__cta');
  const buyButtonMobile = document.querySelector('.button--menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  function hideButton() {
    buyButton.classList.toggle('is-hidden');
  }

  function hideBackdrop() {
    mobileMenuBox.classList.toggle('is-hidden-menu');
  }

  openMenuBtn.addEventListener('click', () => {
    toggleMenu();
    hideButton();
    hideBackdrop();
  });
  closeMenuBtn.addEventListener('click', () => {
    toggleMenu();
    hideButton();
    hideBackdrop();
  });

  mobileMenuBox.addEventListener('click', () => {
    toggleMenu();
    hideButton();
    hideBackdrop();
  });

  buyButtonMobile.addEventListener('click', () => {
    toggleMenu();
    hideButton();
    hideBackdrop();
  });

  mobileMenu.addEventListener('click', e => {
    e.stopPropagation();
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
