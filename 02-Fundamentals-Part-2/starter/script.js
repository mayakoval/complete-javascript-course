// 'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;

// function sayHi(name) {
// 	console.log(`Hi ${name}!`);
// }

// returning a value from one function and assigning it to a new variable

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`
// 	return juice;
// }

// call a function with chosen arguments

// const newJuice = fruitProcessor(3, 2);
// console.log(newJuice)

// function declaration
// named function will work when called on the top of the code
// preferrable to function expressions

// const age = calcAge(1989);
// console.log(age);

// function calcAge(birthYear) {
// 	d = new Date();
// 	const currentYear = d.getFullYear();
// 	return currentYear - birthYear;
// }

// console.log(calcAge(1990))

// // unnamed function == function expression
// // const age2 = calcAge2(1991); // won't work

// const calcAge2 = function(birthYear) {
// 	d = new Date();
// 	const currentYear = d.getFullYear();
// 	return currentYear - birthYear;
// }

// console.log(calcAge2(1990))