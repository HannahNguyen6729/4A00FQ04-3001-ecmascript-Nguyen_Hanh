// Create application where user gives a string. The app informs if this string was palindrome.

var readlineSync = require("readline-sync");

//wait for the user  answers
var word = readlineSync.question("May I have a word?");
var flag = true;

for (let i = 0; i < Math.floor(word.length / 2); i++) {
  if (word[i].localeCompare(word[word.length - 1 - i]) != 0) {
    flag = false;
    break;
  }
}
if (flag) {
  console.log("Your word is:  " + word + " which is a palindrome");
} else {
  console.log("Your word is:  " + word + " which is NOT a palindrome");
}
