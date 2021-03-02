'use strict';

// // sandbox

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 11;

// game logic

// random number generator, adds 1 to include 20 as the last possibility
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	// console.log(guess, typeof guess);
	if (!guess) {
		document.querySelector('.message').textContent = 'No number chosen';
	} else if (guess > 20 || guess < 1) {
		document.querySelector('.message').textContent =
			'Number has to be between 1 to 20!';

		// win
	} else if (guess === randomNumber) {
		document.querySelector('.message').textContent = 'Correct anwser!';
		document.querySelector('.number').textContent = randomNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (highscore < score) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// too high
	} else if (guess > randomNumber) {
		// guard clause
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too high, try again';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'Game over';
			document.querySelector('.score').textContent = 0;
		}

		// too low
	} else if (guess < randomNumber) {
		// guard clause
		if (score > 1) {
			document.querySelector('.message').textContent = 'Too low, try again';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'Game over';
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	// re-assign the random value
	randomNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.message').textContent = 'Start guessing...';

	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	// empty guess box
	document.querySelector('.guess').value = '';
	// change CSS otherwise will remain green when guess is correct
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
