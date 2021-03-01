// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// let variable = "hello";
// let variable2 = "hi";

// console.log(variable);

// smart thermometer exercise

const temperatures = [3, -2, -6, 1, "error", 9, 12, 16];

const calcAmplitude = function (temps) {
	// method 2
	let temperatures = [];
	for (let i = 0; i < temps.length; i++) {
		const temperature = temps[i];
		if (typeof temperature !== "number") continue;

		temperatures.push(temperature);
	}

	const max = Math.max(...temperatures);
	const min = Math.min(...temperatures);

	return max - min;

	// // method 1
	// let highestTemp = temps[0];
	// let lowestTemp = temps[0];

	// for (let i = 0; i < temps.length; i++) {
	// 	const temperature = temps[i];
	// 	if (typeof temperature !== "number") continue;

	// 	if (temperature > highestTemp) highestTemp = temperature;
	// 	if (temperature < lowestTemp) lowestTemp = temperature;
	// }
	// console.log(highestTemp, lowestTemp);
	// return highestTemp - lowestTemp;
};

console.log(calcAmplitude(temperatures));
