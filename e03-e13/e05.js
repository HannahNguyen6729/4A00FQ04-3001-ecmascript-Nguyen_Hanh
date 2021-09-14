// Create variable containing some string, for example ‘hello’. Try to cast it to number using Number - function. What do you get when this fails? Transform the result to string. Repeat the string 16 times and output it. Output also ‘batman’. 🙂
var name = "hello hannah";
var number1 = Number(name);
console.log(number1);
//result:  NaN

//transform the result to string
var change = number1.toString();
console.log(change);
//result: NaN

for (var i = 0; i < 16; i++) {
  console.log(change);
}
console.log("batman");

var change2 = "" + number1;
console.log(change2);
