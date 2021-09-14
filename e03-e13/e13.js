// Create a simple function `abs` that calculates the absolute value of given number:
//     console.log( abs(-7) ) // outputs 7
//     console.log( abs(7) )  // outputs 7
var readlineSync = require("readline-sync");

//wait for the user  answers
var number = readlineSync.questionInt("May I have a number?");
let x = Math.abs(number);
console.log(x);

// let absValue = (number) => {
//   let x = Math.abs(number);
//   console.log(x);
// };
// absValue(number);
