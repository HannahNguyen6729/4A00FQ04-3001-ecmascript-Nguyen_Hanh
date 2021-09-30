//let obj = { name: "jussi" };
function Dog(name) {
  this.name = name;
  //   this.sniffButt = function () {
  //     console.log("hello world");
  //   };
  // this.sniffButt = this.sniffButt.bind(obj);
  this.sniffButt = this.sniffButt.bind(this);
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};
let spot = new Dog("SPOT");
let vilma = new Dog("VILMA");
spot.sniffButt();
vilma.sniffButt();
//How many times is the sniffButt in memory?: only ONE
Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};
spot.delayedSniffButt(); //undefined sniffs butt

//If you add following function to Dog function, what happens and why?hello world
// hello world
// hello world
// hello world
//Reason: when adding method sniffButt() into the constructor function, the method delayedSniffButt() will prefer to call that method sniffButt() first.

//What happens if you do following, why?

// let obj = { name: "jussi" };
// function Dog(name) {
//   this.name = name;
//   this.sniffButt = this.sniffButt.bind(obj);
// }

//now, the method delayedSniffButt() will call method sniffButt() inside constructor function. Then after that calling sniffButt() prototype, but this keyword in that prototype is replaced by obj jussi so result will be: jussi sniffs butt :)

//Now try out:
// function Dog(name) {
//   this.name = name;
//   this.sniffButt = this.sniffButt.bind(this);
// }
//reason: similar to the case object jussi, but now this keyword inside bind() is replaced by object dog (spot and vlima), so the result will be: spot sniffs butt
