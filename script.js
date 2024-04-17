'use strict';

/**
 * We are creating 4 functions
 * 1. Click the "show modal button" for it to show the modal
 * 2. Click the "x" button when the modals are open to close the modal
 * 3. Click outside the modal (the overlay) to close the modal
 * 4. Click the esc button on the keyboard to close the modal
 */

/**
 * Step1: Select all elements we would need and store to variables
 */
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

/** THIS IS THE LAST STEP. DO ALL OTHER STEPS BEFORE COMING BACK HERE
 * Step 6: Refactor our code cause it is really repititive
 */
const closeModal = function () {
  //when the overlay is clicked, we want the modal to dissapear, so we add the hidden class
  modal.classList.add('hidden');
  //now add hidden class on overlay
  overlay.classList.add('hidden');
};

/**
 * Step2: Create the first function that allows the show modal button work
 * we have to use a loop because we selected 3 buttons at once
 */
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    //when the button is clicked, we want the modal to show, so we remove the hidden class
    modal.classList.remove('hidden');
    //now we remove the overlay
    overlay.classList.remove('hidden');
  });
}

/**
 * Step 3: Create the second function that allows the "x" button to close the modal
 */
btnCloseModal.addEventListener('click', closeModal);

/**
 * Step 4: create the 3rd function that allows the modal to close when outside the modal is clicked
 */
overlay.addEventListener('click', closeModal);

/**
 * Step 5 & final step: We add function that allows the esc kep to close the modal and remove the overlay
 * This is a global event
 * keydown is used to create a keyboard event instead of click
 */

document.addEventListener('keydown', function (e) {
  //"key" allows us see what key on the keyboard was pressed
  console.log(e.key);
  //we need to find out if the pressed key is escape and if the modal is currently showing
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
