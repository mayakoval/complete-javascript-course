'use strict';

// function scope

function calcAge(birthYear) {
	const age = 2021 - birthYear;

	function printAge() {
		// access to firstName is gained as global is a parent to local scope
		const output = `${firstName}, you are ${age} years old as you were born in ${birthYear}`;
		console.log(output);

		// still has birthYear within its scope
		if (birthYear >= 1981 && birthYear <= 1996) {
			const message = `Looks like you're a millenial, ${firstName}`;
			console.log(message);
		}
		// message will not be accessed outside of block scope
		console.log(message);
	}

	// successful access to printAge and age
	printAge();
	return age;
}

// global variable

const firstName = 'John';
calcAge(1985);

// error: printAge not defined
// no access from global scope
// console.log(age);
// printAge();
