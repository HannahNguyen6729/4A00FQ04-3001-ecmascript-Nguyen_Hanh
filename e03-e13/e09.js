//import process from "process";
let newArray = process.argv.slice(2, 4);
console.log(newArray);
let sum = 0;
for (let value of newArray) {
  sum += Number(value);
}
console.log(sum);
