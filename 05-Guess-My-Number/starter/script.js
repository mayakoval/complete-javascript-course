'use strict';

// // sandbox

// console.log(document.querySelector('.message'));
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 11;

// game logic

// random number generator, adds 1 to include 20 as the last possibility
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const generateNumber = function () {
	return Math.trunc(Math.random() * 20) + 1;
};

const updateScore = function (score) {
	document.querySelector('.score').textContent = score;
};

let randomNumber = generateNumber();
updateScore(score);
console.log(randomNumber);

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	// console.log(guess, typeof guess);
	if (!guess) {
		displayMessage('No number chosen');
	} else if (guess > 20 || guess < 1) {
		displayMessage('Number has to be between 1 to 20!');

		// win
	} else if (guess === randomNumber) {
		displayMessage('Correct anwser!');
		document.querySelector('.number').textContent = randomNumber;
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (highscore < score) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}

		// guess is incorrect
	} else if (guess !== randomNumber) {
		if (score > 1) {
			displayMessage(
				guess > randomNumber ? 'Too high, try again' : 'Too low, try again'
			);
			score--;
			updateScore(score);
		} else {
			displayMessage('Game over');
			updateScore(0);
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	// re-assign the random value
	randomNumber = generateNumber();
	displayMessage('Start guessing...');

	updateScore(score);
	document.querySelector('.number').textContent = '?';
	// empty guess box
	document.querySelector('.guess').value = '';
	// change CSS otherwise will remain green when guess is correct
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
