// let js = 'amazing'
// if (js === 'amazing') alert('JavaScript is fun!');

// let language;

// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof Symbol("foo"));
// console.log(typeof BigInt("0x1fffffffffffff"));

// language = "Polish";

// challenge #1
// BMI = mass / height ** 2

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / (heightMark ** 2);
// const bmiJohn = massJohn / (heightJohn ** 2);

// // logic replacing markHigherBMI variable
// if (bmiJohn > bmiMark) {
// 	console.log(`John's BMI is bigger than Mark's by ${(bmiJohn - bmiMark).toFixed(1)}`);
// } else if (bmiMark === bmiJohn) {
// 	console.log(`Both Mark and John have the same BMI of ${bmiJohn}`);
// } else {
// 	console.log(`Mark's BMI is greater than John's by ${(bmiMark - bmiJohn).toFixed(1)}`);
// }

// challenge #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreKoalas === scoreDolphins) {
// 	console.log(`It's a draw with both teams scoring ${scoreKoalas}!`);
// } else if (scoreKoalas > scoreDolphins) {
// 	console.log(`Koalas win with ${scoreKoalas} vs ${scoreDolphins} for Dolphins`);
// } else if (scoreKoalas < scoreDolphins) {
// 	console.log(`Dolphins win with ${scoreDolphins} vs ${scoreKoalas} for Koalas`);
// }

// turning switch statement into if-else
// if (day === 'monday') {
// 	console.log('Plan your week');
// } else if (day === 'tuesday') {
// 	console.log('Excercise');
// } else if (day === 'wednesday' || day === 'thursday') {
// 	console.log('Write code')
// } else if (day === 'friday') {
// 	console.log('Read articles')
// } else if (day === 'saturday' || day === 'sunday') {
// 	console.log('Enjoy your weekend')
// } else {
// 	console.log('Not a valid day')
// }

// ternary
// const age = 20;
// age >= 18 ? console.log('Can vote') : console.log('Wait to 18');

// challenge #4
const bill = 250;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
