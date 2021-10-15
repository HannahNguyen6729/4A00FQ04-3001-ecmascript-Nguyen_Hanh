function printName() {
  console.log("Hannah");
}
function sum(a, b) {
  return a + b;
}
// let s = sum(5, 5);
// console.log(s);

//module.exports = printName;

let obj = { printName: printName, sum: sum };
module.exports = obj;
