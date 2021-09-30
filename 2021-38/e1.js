//ex1:
function doIt() {
  function print() {
    console.log("Hello World");
  }
  return print;
}
let f = doIt();
f();
//output hello world
