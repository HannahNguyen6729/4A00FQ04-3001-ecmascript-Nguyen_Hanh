let obj = { name: "jussi" };
class Dog {
  constructor(_name) {
    this.name = _name;
    // this.sniffButt = function () {
    //   console.log("hello world");
    // };

    //this.sniffButt = this.sniffButt.bind(obj);

    this.sniffButt = this.sniffButt.bind(this);
  }
  //prototype
  sniffButt() {
    console.log(this.name + "  sniffs butt");
  }
  delayedSniffButt() {
    setTimeout(this.sniffButt, 1000);
  }
}
let spot = new Dog("Spot");
//let vlima = new Dog("Vilma");
spot.sniffButt();
spot.delayedSniffButt(); //undefined  sniffs butt
