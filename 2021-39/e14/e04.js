import require from "readline-sync";
import fs from "fs";
//var readlineSync = require("readline-sync");
var fileName = require.question("What is the file name?");
console.log("Give file name: " + fileName);
//var fs = require("fs");
fs.readFile(`./${fileName}`, "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    try {
      const obj = JSON.parse(data);
      if (!("name" in obj)) {
        console.log(
          `this file: ./${fileName} contains json but not property name`
        );
      } else {
        console.log(obj.name);
      }
    } catch (err) {
      console.log("this file does not contain json");
    }
  }
});
