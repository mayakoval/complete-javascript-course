'use strict';

// sandbox

console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 11;
