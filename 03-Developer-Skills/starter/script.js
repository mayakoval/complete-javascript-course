// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// let variable = "hello";
// let variable2 = "hi";

// console.log(variable);

// smart thermometer exercise

// const temperatures = [3, -2, -6, 1, "error", 9, 12, 16];

// const calcAmplitude = function (temps) {
// 	// method 2
// 	let temperatures = [];
// 	for (let i = 0; i < temps.length; i++) {
// 		const temperature = temps[i];
// 		if (typeof temperature !== "number") continue;

// 		temperatures.push(temperature);
// 	}

// 	const max = Math.max(...temperatures);
// 	const min = Math.min(...temperatures);

// 	return max - min;

// 	// // method 1
// 	// let highestTemp = temps[0];
// 	// let lowestTemp = temps[0];

// 	// for (let i = 0; i < temps.length; i++) {
// 	// 	const temperature = temps[i];
// 	// 	if (typeof temperature !== "number") continue;

// 	// 	if (temperature > highestTemp) highestTemp = temperature;
// 	// 	if (temperature < lowestTemp) lowestTemp = temperature;
// 	// }
// 	// console.log(highestTemp, lowestTemp);
// 	// return highestTemp - lowestTemp;
// };

// console.log(calcAmplitude(temperatures));

// merging arrays

// const temperatures1 = [3, -2, -6, 1, "error", 9, 12, 16];
// const temperatures2 = [23, 12, 5, "error", -1];

// const calcAmplitudeNew = function (arr1, arr2) {
// 	const merged = arr1.concat(arr2);
// 	let temperatures = [];
// 	for (let i = 0; i < merged.length; i++) {
// 		const temperature = merged[i];
// 		if (typeof temperature !== "number") continue;

// 		temperatures.push(temperature);
// 	}

// 	const max = Math.max(...temperatures);
// 	const min = Math.min(...temperatures);

// 	return max - min;
// };

// console.log(calcAmplitudeNew(temperatures1, temperatures2));

// // debugging

// const measureKelvins = function () {
// 	const measurement = {
// 		type: "temp",
// 		unit: "celsius",
// 		value: prompt("Enter degrees in Celsius: "),
// 	};

// 	console.table(measurement);

// 	const kelvins = Number(measurement.value) + 273;
// 	return kelvins;
// };

// console.log(measureKelvins());

// challenge #1

const printForecast = function (arr) {
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		const day = i + 1;
		const temp = arr[i];
		str += `${temp}oC in ${day} days ...`;
	}
	console.log("..." + str);
};

printForecast([4, 5, 6]);
