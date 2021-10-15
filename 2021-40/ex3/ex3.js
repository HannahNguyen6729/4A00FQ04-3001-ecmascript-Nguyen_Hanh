import { min, max } from "./utility.js";
import { default as readCmdLineArg } from "./commandlineargument.js";
let myArgs = readCmdLineArg();
console.log(min(myArgs));
console.log(max(myArgs));
