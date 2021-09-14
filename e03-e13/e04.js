// Ask also a number, output the name number of times. So if given “jack” and 4, output jackjackjackjack. (google for / while javascript. Or string repeat)
var readlineSync = require("readline-sync");

// Wait for user's response.
var userName = readlineSync.question("May I have your name? ");
var userNumber = readlineSync.questionInt(" May I have a number? ");
// var i = 0;
// while (i < userNumber) {
//   console.log(userName);
//   i++;
// }
var x = "";
for (var i = 0; i < userNumber; i++) {
  x += userName;
}
console.log(x);
