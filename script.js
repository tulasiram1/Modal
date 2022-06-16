'use strict';
const showModalButton = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModalButton = document.querySelector('.close-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
showModalButton.forEach((e) => {
  e.addEventListener('click', () => {
    openModal();
  });
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    closeModal();
  }
});
