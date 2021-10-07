import require from "readline-sync";
import fs from "fs";
import util from "util";

var fileName = require.question("What is the file name?");
console.log("Give file name: " + fileName);

fs.readFile(`${fileName}`, "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
});

function parseJson(data) {
  function func(resolve, reject) {
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

async function readFileAndParse(fileName) {
  const readFile = util.promisify(fs.readFile);
  const data = await readFile(`${fileName}`);
  const msg = await parseJson(data);
  return msg;
}
readFileAndParse(fileName)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
