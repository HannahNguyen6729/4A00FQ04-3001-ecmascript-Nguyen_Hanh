function doIt1() {
  console.log("hello");
}
doIt1();
let doIt2 = new Function("", "console.log('hello')");
doIt2.call();

function sum1(a, b) {
  return a + b;
}
let s1 = sum1(5, 5);
console.log(s1);

console.log("===========");
let sum2 = new Function("a", "b", "return a + b");
let s2 = sum2.call({}, 5, 5);
console.log(s2);

console.log("===========");
function doIt(a, b) {
  console.log(a + b);
}
doIt(5, 5);
doIt.call({}, 5, 5);

console.log("===========");
function doIt3(a, b) {
  console.log(this);
}
doIt3(5, 5);
console.log("===========");
doIt3.call({}, 5, 5);

console.log("=====================================");
function doIt4(a, b) {
  console.log(this);
}
let object = { key: "value" };
doIt4.call(object, 5, 5);

//So what is the first argument here?
//the first argument is an object which is assigned to THIS
