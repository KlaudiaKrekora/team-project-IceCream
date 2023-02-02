// Modal for location button

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open]'),
    closeModalBtn: document.querySelector('[data-close]'),
    modal: document.querySelector('[data-modal-contact]'),
    modalBox: document.querySelector('.modal-contact'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalBox.addEventListener('click', e => {
    e.stopPropagation();
  });

  function toggleModal() {
    refs.modal.classList.toggle('hidden');
  }
})();

// Modal for franchise button

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-form-open]'),
    closeModalBtn: document.querySelector('[data-form-close]'),
    modal: document.querySelector('[data-form-contact]'),
    modalBox: document.querySelector('.modal-contact--form'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalBox.addEventListener('click', e => {
    e.stopPropagation();
  });

  function toggleModal() {
    refs.modal.classList.toggle('hidden');
  }
})();
