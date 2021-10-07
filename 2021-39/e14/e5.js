import require from "readline-sync";
import fs from "fs";
import util from "util";

//var readlineSync = require("readline-sync");
var fileName = require.question("What is the file name?");
console.log("Give file name: " + fileName);
//var fs = require("fs");
fs.readFile(`${fileName}`, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
});
//const util = require("util");
const readFile = util.promisify(fs.readFile);
readFile(`${fileName}`, "utf-8")
  .then((data) => parseJson(data))
  // .then((name) => console.log(name))
  .catch((msg) => console.log(msg));

function parseJson(data) {
  function func(resolve, reject) {
    // parse the data (do not implement try catch, if exception occurs, this
    // will be catched automatically in your catch outside of this function.
    // if name is found from obj, call resolve, otherwise call reject
    const obj = JSON.parse(data);
    if (!("name" in obj)) {
      reject("Problem: property name not found");
    } else {
      const m = obj.name;
      resolve(m);
    }
  }
  return new Promise(func);
}
