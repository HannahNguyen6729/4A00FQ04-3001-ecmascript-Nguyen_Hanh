var readlineSync = require("readline-sync");
var fileName = readlineSync.question("What is the file name?");
console.log("Give file name: " + fileName);
console.log("The content of file is: ");
var fs = require("fs");
fs.readFile(`./${fileName}`, "utf-8", (err, data) => {
  if (err) {
    throw `file ${fileName} does not exist`;
  } else {
    console.log(data);
    try {
      const obj = JSON.parse(data);
      //console.log(obj);
      if (!("name" in obj)) {
        console.log(`file ${fileName} contains json but not property name `);
      } else {
        console.log("property name: " + obj.name);
      }
    } catch (error) {
      console.log(`problem: file ${fileName} does not contain json`);
    }
  }
});
