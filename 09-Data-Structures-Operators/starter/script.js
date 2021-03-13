'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // method for destructuring object
  // one object makes multiple arguments
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // setting default values
    (starterIndex = 1),
      (mainIndex = 0),
      (time = '20:00'),
      address,
      console.log(
        `Order for received! \n Starter: ${this.starterMenu[starterIndex]}, \n Main: ${this.mainMenu[mainIndex]} \n to be delivered to ${address} for ${time}`
      );
  },

  orderPizza: function (dough, sauce, topping) {
    console.log(
      `Your pizza is on ${dough} dough with ${sauce} sauce and ${topping} on top. Yummy!`
    );
  },
};

// rest pattern
// looks like spread operator, does the opposite

// 1) DESTRUCTURING
// spread operator on the right
const arr = [1, 2, ...[3, 4]];
// REST on the left and must be the last element!!
// after element b, takes the remaining ones & puts in array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// REST pattern for combining arrays
// skip the 2nd main and combine with starters
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST on objects
// destructure weekdays' hours
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // collects rest of properties into separate object

// 2) FUNCTIONS
// use REST to account for an unknown amount of parameters
const add = function (...numbers) {
  let sum = 0;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(3, 5, 6, 6); // REST arguments will be in an array
// if wanted to use add on an array:
const arrAdd = [3, 5, 7, 2];
// use SPREAD to destructure arrAdd
add(...arrAdd);

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
