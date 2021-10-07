var readlineSync = require("readline-sync");
var fileName = readlineSync.question("What is the file name?");
console.log("Give file name: " + fileName);
console.log("the content of file is: ");
var fs = require("fs");
fs.readFile(`./${fileName}`, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
