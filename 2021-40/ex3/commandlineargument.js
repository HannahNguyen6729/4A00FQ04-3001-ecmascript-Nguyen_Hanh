export default function readCmdLineArg() {
  let myArgs = process.argv.slice(2);
  myArgs = Array.from(myArgs);
  myArgs = myArgs.map((item) => {
    return Number(item);
  });
  for (let item of myArgs) {
    if (!Number.isInteger(item)) {
      return;
    }
  }
  return myArgs;
}
let x = readCmdLineArg();
console.log(x);
