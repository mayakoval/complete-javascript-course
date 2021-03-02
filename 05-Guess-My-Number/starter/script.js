'use strict';

// // sandbox

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 11;

// game logic

// random number generator, adds 1 to include 20 as the last possibility
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	// console.log(guess, typeof guess);

	if (!guess) {
		document.querySelector('.message').textContent = 'No number chosen';
	} else if (guess > 20 || guess < 1) {
		document.querySelector('.message').textContent =
			'Number has to be between 1 to 20!';
	} else if (guess === randomNumber) {
		document.querySelector('.message').textContent = 'Correct anwser!';
	} else if (guess > randomNumber) {
		document.querySelector('.message').textContent = 'Too high, try again';
	} else if (guess < randomNumber) {
		document.querySelector('.message').textContent = 'Too low, try again';
	}
});
