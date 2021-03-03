'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const showModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
	btnsShowModal[i].addEventListener('click', showModal);

// closeModal doesn't require empty brackets
// adding brackets would trigger the function without clicking
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// e for event
document.addEventListener('keydown', function (e) {
	// close the modal if not hidden
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
