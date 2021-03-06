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

// // functions

// // function declaration can be called before it's defined
// console.log(addDecl(2, 3));

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// };

// // function lives in the DZ and should be called after addExpr is declared
// console.log(addExpr(2, 3));

// // if it was a var addArrow it would have to be called
// // AFTER declaration, otherwise will return undefined
// const addArrow = (a, b) => a + b;

// // same as with addExpr (if a const/let)
// console.log(addArrow(2, 3));

// var x = 1;
// let y = 2;
// const z = 3;

// // true - only var is a global window object
// console.log(x === window.x);
// // false
// console.log(y === window.y);
// // false
// console.log(z === window.z);

// // this keyword

// // window object
// console.log(this);

// const calcAge = function (birthYear) {
// 	// will return the result
// 	console.log(2021 - birthYear);
// 	// undefined
// 	console.log(this);
// };

// calcAge(1934);

// const calcAgeArrow = birthYear => {
// 	// returns the result
// 	console.log(2021 - birthYear);
// 	// widow object:
// 	console.log(this); // this keyword doesn't belong to arrow function
// };

// calcAgeArrow(1953);

// const method = {
// 	year: 2014,
// 	calcAge: function () {
// 		// will call method.year as it's the closest object
// 		// belonging to the object calling the method
// 		console.log(this);
// 	},
// };

// // method is an object calling calcAge function
// method.calcAge();

// // regular vs. arrow functions

// const method = {
// 	methodName: 'test',
// 	year: 2014,
// 	calcAge: function () {
// 		console.log(this);
// 		console.log(2053 - this.year);

// 		// way around not being able to use this in isMillenial
// 		// Solution 1
// 		// is to set self of 'this' value
// 		// const self = this; // self or that

// 		// const isMillenial = function () {
// 		// would not work as this is undefined
// 		// this for every regular function call will be undefined
// 		// console.log(this.year >= 1981 && this.year <= 1996);
// 		// instead:
// 		// console.log(self.year >= 1981 && self.year <= 1996);
// 		// };

// 		// Solution 2
// 		// is to set isMillenial as an arrow function
// 		// as it doesn't have this - it will inherit it from method
// 		const isMillenial = () => {
// 			// shows method object
// 			console.log(this);
// 			console.log(this.year >= 1981 && this.year <= 1996);
// 		};
// 		isMillenial();
// 	},

// 	// this.methodName will return undefined as the parent scope === global
// 	// window object has no methodName (could be created with var)
// 	// reason for NOT using arrow function as your method
// 	showMethod: () => console.log(`The method is ${this.methodName}`),
// };

// method.showMethod();
// method.calcAge();

// // arguments keyword

// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };

// addExpr(4, 2);
// // can be more than the amount of parameters in the function expression
// addExpr(4, 2, 5, 6);

// var addArrow = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// };

// // will cause ReferenceError: arguments not defined
// // as arguments doesn't exist in arrow functions
// addArrow(2, 4);

// primitive values vs objects

// Primitive values
let lastName = 'Williams';
let previousLastName = lastName;
lastName = 'Davis';
// lastName will be changes to Davis, previousLastName
// will stay as Williams as both primitives live in the
// call stack with separate references
console.log(lastName, previousLastName);

// Reference types
const jess = {
	firstName: 'Jess',
	lastName: 'Williams',
	age: 27,
};

const marriedJess = jess;
marriedJess.lastName = 'Davis';
// marriedJess will change lastName
console.log(marriedJess);
// but so will jess object
console.log(jess);
// as per line 212 both belong to the same value in the stack
// which holds the same reference to both jess & marriedJess
// when lastName gets reassigned in heap stack and affects both properties

// Copying objects
const kate = {
	firstName: 'Kate',
	lastName: 'Doe',
	age: 30,
};

// create a new object with the same properties as kate - shallow copy
// similarly to Ruby's duplication
// e.g. array would be too nested to be a separate property for both kate and kateCopy
const kateCopy = Object.assign({}, kate);
kateCopy.lastName = 'Foe';
// kateCopy has a new reference in stack and will have diff lastName
console.log(kate, kateCopy);
