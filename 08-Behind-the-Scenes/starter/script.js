'use strict';

// // function scope

// function calcAge(birthYear) {
// 	const age = 2021 - birthYear;

// 	function printAge() {
// 		// access to firstName is gained as global is a parent to local scope
// 		let output = `${firstName}, you are ${age} years old as you were born in ${birthYear}`;
// 		console.log(output);

// 		// still has birthYear within its scope
// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			// will extend the scope beyond this block
// 			var millenial = true;
// 			// millenial message will use this new variable as it's closer in the scope chain
// 			const firstName = 'Steven';
// 			// re-assigning an existing variable inside child scope
// 			output = 'NEW OUTPUT';
// 			const message = `Looks like you're a millenial, ${firstName}`;
// 			console.log(message);

// 			function add(a, b) {
// 				return a + b;
// 			}
// 		}
// 		// message will not be accessed outside of block scope
// 		// console.log(message);

// 		// message will be printed as millenial is FUNCTION-scoped
// 		console.log(millenial);
// 		console.log(output);
// 		// will not return the sum if strict mode is on
// 		// as it is block-scoped
// 		// add(2, 3);
// 	}

// 	// successful access to printAge and age
// 	printAge();
// 	return age;
// }

// // global variable

// const firstName = 'John';
// calcAge(1985);

// // error: printAge not defined
// // no access from global scope
// // console.log(age);
// // printAge();

// console.log(me);

// // returns undefined
// var me = 'Maya';
// let job = 'Developer';
// // job and year are in a dead zone before being initialized
// console.log(job);

// const year = 2021;
// console.log(year);

// functions

// function declaration can be called before it's defined
console.log(addDecl(2, 3));

function addDecl(a, b) {
	return a + b;
}

const addExpr = function (a, b) {
	return a + b;
};

// function lives in the DZ and should be called after addExpr is declared
console.log(addExpr(2, 3));

// if it was a var addArrow it would have to be called
// AFTER declaration, otherwise will return undefined
const addArrow = (a, b) => a + b;

// same as with addExpr (if a const/let)
console.log(addArrow(2, 3));
