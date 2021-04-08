'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	// ES6 enhanced object literals

	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	// method for destructuring object
	// one object makes multiple arguments
	orderDelivery({ starterIndex, mainIndex, time, address }) {
		// setting default values
		(starterIndex = 1),
			(mainIndex = 0),
			(time = '20:00'),
			address,
			console.log(
				`Order for received! \n Starter: ${this.starterMenu[starterIndex]}, \n Main: ${this.mainMenu[mainIndex]} \n to be delivered to ${address} for ${time}`
			);
	},

	orderPizza(dough, sauce, topping) {
		console.log(
			`Your pizza is on ${dough} dough with ${sauce} sauce and ${topping} on top. Yummy!`
		);
	},

	orderPasta(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

const airline = 'LOT Airlines';
const plane = 'A320';

// a string can be iterated over thanks to boxing
// string converted into object which is iterated over
console.log(plane[0]);
console.log(plane.indexOf('A'));
console.log(plane.slice(2)); // slices 'A320' at index 2 -> takes A3, leaves 20
console.log(plane.slice(2, 3)); // cuts off '0' as its index is 3

console.log(airline.slice(0, airline.indexOf(' '))); // returns LOT

const checkMiddleSeat = seat => {
	const letter = seat.slice(-1);
	if (
		letter === 'B' || letter === 'E'
			? console.log("That's a middle seat")
			: console.log("That's NOT a middle seat")
	);
};

checkMiddleSeat('11B');

// // map: similar to Ruby's hash
// const rest = new Map();
// rest.set('name', 'Hey Ho');

// rest
//   .set('categories', ['Italian', 'Vegetarian', 'Mexican'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, "Sorry, we're closed");

// console.log(rest.get('categories')); // returns categories array
// console.log(rest.has('categories')); // returns true
// const time = 21;
// // will return we are open
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// rest.delete('name');
// console.log(rest);
// // set an array as a key
// rest.set([1, 2], 'test rest');
// console.log(rest, rest.size);

// console.log(rest.get([1, 2])); // returns undefined
// const arr = [3, 4];
// rest.set(arr, 'rest two');
// console.log(rest.get(arr)); // returns rest two

// // iterate over map

// const quiz = new Map([
// 	['question', 'Best programming language?'],
// 	[1, 'C'],
// 	[2, 'Java'],
// 	[3, 'Javascript'],
// 	['correct', 3],
// 	[true, 'Correct!'],
// 	[false, 'Try again'],
// ]);

// // convert object to a map
// console.log(Object.entries(openingHours)); // returns 3 arrays
// const mapHours = new Map(Object.entries(openingHours));
// console.log(mapHours); // returns 3 object entries

// alert(quiz.get('question'));
// // map is an iterable, unlike object
// // so question doesn't need destructuring
// for (const [key, value] of quiz) {
// 	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer: '));
// if (
// 	answer === quiz.get('correct')
// 		? alert(quiz.get(true))
// 		: alert(quiz.get(false))
// );

// // convert map to array with spread operator
// console.log(...quiz);
// // get keys/values only
// console.log([...quiz.keys()]);

// // set: collection of unique elements
// // can hold different data types
// // values are unique & unordered

// const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza']); // duplicates won't show
// console.log(ordersSet);

// // iterate over a string
// console.log(new Set('Delicious pizza').size); // returns 12 as # of elements
// // includes method for a set - has
// console.log(ordersSet.has('Pizza')); // true
// console.log(ordersSet.has('Gnocci')); // false
// console.log(ordersSet.add('Garlic bread'));
// // there are no indexes so delete value by its key
// ordersSet.delete('Garlic bread');
// console.log(ordersSet);

// // can iterate over a set
// for (const set of ordersSet) console.log(set);

// const staff = ['waiter', 'manager', 'manager', 'manager', 'chef'];
// // spread operator will deconstruct the set into an array
// const staffUniq = [...new Set(staff)];
// console.log(staffUniq);

// // call keys
// const properties = Object.keys(openingHours);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // call values
// const hours = Object.values(openingHours);
// console.log(hours);

// // call entries
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // destructure entries object to show opening and closing times
// // at a given week day (key)
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// // console.log(restaurant.openingHours.mon.open); // error as mon is undefined
// console.log(restaurant.openingHours.mon?.open); // returns undefined

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   // does open exist for a given day?
//   // Saturday opens at 0 which is a falsey value
//   const open = restaurant.openingHours[day]?.open || "Sorry, we're closed";
//   // nullish coalescing operator in action
//   // will show Sat opening hour
//   const openAll = restaurant.openingHours[day]?.open ?? "Sorry, we're closed";
//   console.log(openAll);
// }

// // check if method exists
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // yes
// console.log(restaurant.orderSoup?.(0, 1) ?? 'Method does not exist'); // no

// // looping over arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // list each item from const menu
// for (const item of menu) console.log(item);

// // list items with the corresponding index
// // .entries is an array iterator
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}. ${el}`);
// }

// restaurant.numGuests = 0;
// // nullish values are: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10; // will return 10 if numGuests is not defined
// console.log(guestCorrect);

// // Booleans: can use & return any data type
// // Short-circuiting, e.g.

// console.log(3 || 'Hey'); // returns 3 as it's truthy
// console.log('' || 'Hey'); // 'Hey'
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(0 && 'Hey'); // 0 -> whole result is false
// console.log(7 && 'Hey'); // Hey -> both results are truthy, will print 7

// // example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('thick', 'tomato', 'mushroom');
// }
// // is the same as:
// // check if truthy, if so execute orderPizza
// restaurant.orderPizza && restaurant.orderPizza('thick', 'tomato', 'mushroom');

// // rest pattern
// // looks like spread operator, does the opposite

// // 1) DESTRUCTURING
// // spread operator on the right
// const arr = [1, 2, ...[3, 4]];
// // REST on the left and must be the last element!!
// // after element b, takes the remaining ones & puts in array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // REST pattern for combining arrays
// // skip the 2nd main and combine with starters
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // REST on objects
// // destructure weekdays' hours
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays); // collects rest of properties into separate object

// // 2) FUNCTIONS
// // use REST to account for an unknown amount of parameters
// const add = function (...numbers) {
//   let sum = 0;
//   console.log(numbers);
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(3, 5, 6, 6); // REST arguments will be in an array
// // if wanted to use add on an array:
// const arrAdd = [3, 5, 7, 2];
// // use SPREAD to destructure arrAdd
// add(...arrAdd);

// // order a very cheesy pasta, with other ingredients listed in a separate array
// restaurant.orderPasta('cheese', 'tomatoes', 'basil', 'nduja');

// const ingredients = [
//   prompt('What dough for your pizza?: '),
//   prompt('What sauce on your pizza?: '),
//   prompt('What toppings would you like?: '),
// ];
// restaurant.orderPizza(...ingredients);

// // objects
// const newRestaurant = { ...restaurant, founder: 'Roberto' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Mamma Mia';
// console.log(restaurant.name === restaurantCopy.name); // false

// // spread operator
// const arr = [6, 4, 2];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// const goodArr = [1, 2, ...arr];
// console.log(badArr, goodArr); // same array
// // spread operator takes all the elements from goodArr
// // but does NOT create new variables, unlike destructuring
// console.log(...goodArr);

// const newMenu = [...restaurant.mainMenu, 'Spaghetti'];
// console.log(newMenu);

// // create a shallow copy of the mainMenu
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // merge arrays
// const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(fullMenu);

// // works on strings too
// const str = 'Maya';
// // would NOT work in string interpolation
// const letters = [...str];
// console.log(letters);

// // one object = one argument
// restaurant.orderDelivery({
//   time: '22:00',
//   address: '12 High St',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // destructuring objects
// // the order of the properties doesn't matter in an object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // reassing properties' names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// // 3x true
// console.log(
//   name === restaurantName,
//   openingHours === hours,
//   categories === tags
// );

// // set default values
// // menu doesn't pre-exist as a property so will return []
// // starters does under starterMenu and will display its elements
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables on objects
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 7, c: 13 };

// // wrapping the object in parentheses
// // reassigning a and b values
// ({ a, b } = obj);
// console.log(a, b);

// // destructuring nested objects
// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open: start, close: end }, // reassign properties' names
// } = openingHours;
// console.log(start, end);

// const arr = [2, 3, 4];
// // array destructuring assignment
// const [x, y, z] = arr;
// console.log(x, y, z);

// // skip the second category
// let [first, , third] = restaurant.categories;
// console.log(first, third);

// // switching variables
// // swap places for the first and third entry
// // needs a temporary variable temp
// // const temp = first;
// // first = third;
// // third = temp;
// // console.log(first, third);

// // quicker way to change order
// [first, , third] = [third, , first];
// console.log(first, third);

// console.log(restaurant.order(2, 0));
// // deconstruct the order
// const [starter, main] = restaurant.order(2, 0);
// console.log(starter + ', ' + main);

// // nested array
// const nestedArr = [2, [3, 5]];
// // deconstruct
// const [i, j] = nestedArr;
// console.log(i, j);
// // unpack the i & j element (nested array)
// const [a, [b, c]] = nestedArr;
// console.log(a, b, c);

// // setting default values
// // r = 1 as a default value
// const [p, q = 1, r = 1] = [5, 6];
// console.log(p, q, r);
