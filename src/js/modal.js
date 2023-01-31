(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
// MODALS FOR PRODUCTS
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open--productsFirst]'),
    closeModalBtn: document.querySelector('[data-modal-close--productsFirst]'),
    modal: document.querySelector('[data-modal--productsFirst]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open--productsSecond]'),
    closeModalBtn: document.querySelector('[data-modal-close--productsSecond]'),
    modal: document.querySelector('[data-modal--productsSecond]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open--productsThird]'),
    closeModalBtn: document.querySelector('[data-modal-close--productsThird]'),
    modal: document.querySelector('[data-modal--productsThird]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
