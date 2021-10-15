// const foo = ["one", "two", "three"];
// //destruct variables
// const [a, b, c] = foo;
// console.log(a);
// console.log(b);
// console.log(c);
// //object destrcuturing
// const user = {
//   id: 12,
//   isVerified: true,
// };

// const { id, isVerified } = user;
// console.log(id);
// console.log(isVerified);

//spread syntax
// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

//spread in array literal
// let parts = ["shoulders", "knees"];
// let lyrics = ["head", ...parts, "and", "toes"];
// console.log(lyrics);

//Spread in object literals

// let obj1 = { foo: "bar", x: 42 };
// let obj2 = { foo: "baz", y: 13 };
// let clonedObj = { ...obj1 };
// console.log(clonedObj);
// let mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

//a//   function greeting({ txt, amount }) {}
const greet = {
  txt: "hello",
  amount: 3,
};
function greeting({ txt, amount }) {
  //console.log(txt, amount);
  for (let i = 0; i < amount; i++) {
    console.log(txt);
  }
}
greeting(greet);

//b//   const merge = (array1, array2, order) => {}
let arr1 = [1, 2];
let arr2 = [3, 4];
const merge = (array1, array2, order) => {
  if (order == true) {
    let newArr = [...array1, ...array2];
    console.log(newArr);
  } else {
    let newArr = [...array2, ...array1];
    console.log(newArr);
  }
};
merge(arr1, arr2, false);
//c

let array1 = [1, 2];
const copy = (arr) => {
  let newArr = [...arr];
  return newArr;
};
let array2 = copy(array1);
console.log(array2); // [1,2]
