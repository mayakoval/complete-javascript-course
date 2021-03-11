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
};

// one object = one argument
restaurant.orderDelivery({
  time: '22:00',
  address: '12 High St',
  mainIndex: 2,
  starterIndex: 2,
});

// destructuring objects
// the order of the properties doesn't matter in an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// reassing properties' names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// 3x true
console.log(
  name === restaurantName,
  openingHours === hours,
  categories === tags
);

// set default values
// menu doesn't pre-exist as a property so will return []
// starters does under starterMenu and will display its elements
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables on objects
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 13 };

// wrapping the object in parentheses
// reassigning a and b values
({ a, b } = obj);
console.log(a, b);

// destructuring nested objects
const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: start, close: end }, // reassign properties' names
} = openingHours;
console.log(start, end);

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
