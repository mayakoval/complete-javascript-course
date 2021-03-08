'use strict';

// function scope

function calcAge(birthYear) {
	const age = 2021 - birthYear;
	// will show as firstName is available in global scope
	console.log(firstName);
	return age;
}

// global variable

const firstName = 'John';
calcAge(1985);
