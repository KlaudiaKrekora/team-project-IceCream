// Modal for location button

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open]'),
    closeModalBtn: document.querySelector('[data-close]'),
    modal: document.querySelector('[data-modal-contact]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

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
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hidden');
  }
})();
