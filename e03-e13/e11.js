// Create simple array containing car names (string). By using for and for of loops, output the car names from the list. (so iterate two times)

let carArray = [
  "Toyota",
  "mitsubishi",
  "SUV",
  "BMW",
  "Honda",
  "Nissan",
  "Mazda",
];
//console.log(carArray);
//list car names by using for loop
for (let i = 0; i < carArray.length; i++) {
  console.log(carArray[i]);
}

//for of
console.log("List car names by using for of loop");
for (let value of carArray) {
  console.log(value);
}
