class Person {
  constructor(_name) {
    this.name = _name; //this property is in the object itself
  }
  //this method drinkBeer() is saved in the Person prototype// only one time in the memory
  drinkBeer() {
    console.log(this.name + "  drinks beer");
  }
  sayHello() {
    console.log(" Hello from   " + this.name);
  }
}
let jack = new Person("Jack");
jack.drinkBeer();
jack.sayHello();
let tina = new Person("Tina");
tina.drinkBeer();
tina.sayHello();
//Now drinkBeer and sayHello now only ONE time in the memory

Person.prototype.sayHello(); //Hello from   undefined
Person.prototype.drinkBeer(); //undefined  drinks beer

//If you change your code to:

// class Person {
//   constructor(name) {
//     this.name = name;
//      //  this method drinkBeer() will be multiplied in the memory
//     this.drinkBeer = function () {
//       console.log(this.name + " drinks beer");
//     };
//   }
//   sayHello() {
//     console.log("hello from " + this.name);
//   }
// }
//Now, drinkBeer TWO times in memory
