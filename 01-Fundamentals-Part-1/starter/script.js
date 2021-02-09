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

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);

// logic replacing markHigherBMI variable
if (bmiJohn > bmiMark) {
	console.log(`John's BMI is bigger than Mark's by ${(bmiJohn - bmiMark).toFixed(1)}`);
} else if (bmiMark === bmiJohn) {
	console.log(`Both Mark and John have the same BMI of ${bmiJohn}`);
} else {
	console.log(`Mark's BMI is greater than John's by ${(bmiMark - bmiJohn).toFixed(1)}`);
}
