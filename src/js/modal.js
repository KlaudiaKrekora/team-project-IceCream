(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnMob: document.querySelector('[data-modal-open-mobile]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalBox: document.querySelector('.modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMob.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalBox.addEventListener('click', e => {
    e.stopPropagation();
  });

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
    modalBox: document.querySelector('.modal--products-first'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalBox.addEventListener('click', e => {
    e.stopPropagation();
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open--productsSecond]'),
    closeModalBtn: document.querySelector('[data-modal-close--productsSecond]'),
    modal: document.querySelector('[data-modal--productsSecond]'),
    modalBox: document.querySelector('.modal--products-second'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalBox.addEventListener('click', e => {
    e.stopPropagation();
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open--productsThird]'),
    closeModalBtn: document.querySelector('[data-modal-close--productsThird]'),
    modal: document.querySelector('[data-modal--productsThird]'),
    modalBox: document.querySelector('.modal--products-third'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalBox.addEventListener('click', e => {
    e.stopPropagation();
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// MODAL ABOUT
(() => {
  const aboutBtn = document.querySelector('[data-modal-open--about]');
  const abouModaltBtn = document.querySelector('[data-modal-close--about]');
  const aboutModal = document.querySelector('[data-modal--about]');
  const modalBox = document.querySelector('.modal--about');

  function toggleModalAbout() {
    aboutModal.classList.toggle('is-hidden');
  }

  aboutBtn.addEventListener('click', toggleModalAbout);
  abouModaltBtn.addEventListener('click', toggleModalAbout);
  aboutModal.addEventListener('click', toggleModalAbout);
  modalBox.addEventListener('click', e => {
    e.stopPropagation();
  });
})();

// MOBILE MODAL
