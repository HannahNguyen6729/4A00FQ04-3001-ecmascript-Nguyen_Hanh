// 3. Implement makeAdder function:
//     var add5 = makeAdder(5);
//     var add10 = makeAdder(10);
//     console.log(add5(2));  // 7
//     console.log(add10(2)); // 12

function makeAdder(value) {
  function inner() {
    return value + 2;
  }
  return inner;
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12

// const makeAdder = (value) => {
//   const inner = () => {
//     return value + 2;
//   };
//   return inner;
// };
