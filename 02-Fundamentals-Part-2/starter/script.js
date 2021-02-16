'use strict';

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

// arrow function

// const calcAge3 = (birthYear) => {
// 	d = new Date();
// 	const currentYear = d.getFullYear();
// 	return currentYear - birthYear; // return can be omitted only in one-line code
// }

// console.log(calcAge3(1967));

// challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // test values 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// // checkWinner for taking average score as parameters and logs the winner
// const checkWinner = (avgDolphins, avgKoalas) => {
// 	if (avgDolphins >= avgKoalas * 2) {
// 		console.log(`Dolphins win with ${avgDolphins} to ${avgKoalas} Koalas score`);
// 	} else if (avgKoalas >= avgDolphins * 2) {
// 		console.log(`Koalas win with ${avgKoalas} to ${avgDolphins} Dolphins score`);
// 	} else {
// 		console.log('There are no winners');
// 	}
// }

// checkWinner(scoreDolphins, scoreKoalas);

// // test values 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins, scoreKoalas);

// arrays
// #push for adding an element at the end
// #unshift for adding an element at the beginning
// #pop for removing the last element
// #shift for removing the first element
// #includes for strict equality, e.g. 23 !== '23'

// challenge #2

// const calcTip = billValue => {
// 	const tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
// 	console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0]]

// object - like hash

const car = {
	make: 'BMW', // make is a property (key)
	model: 'whatever',
	age: 10,
	miles: 60000,
	citiesVisited: ['Paris', 'Milan', 'London'],
	isInsured: false,

	// calcAge as car's property
	// calcAge: function(birthYear) {
	// 	return 2021 - birthYear;
	// }

	// this acting as self, fetches data belonging to car
	calcYear: function() {
		console.log(this);
		return 2021 - this.age;
	}
}

// console.log(car.calcAge(2011));

console.log(car.calcYear());

// console.log(car.citiesVisited) same as console.log(car['citiesVisited'])
car.color = 'silver';

console.log(car)

