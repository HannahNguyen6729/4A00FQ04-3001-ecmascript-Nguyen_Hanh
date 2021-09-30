function Person(name) {
  this.name = name;
}
Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};
let jack = new Person("jack");
jack.drinkBeer();
let tina = new Person("tina");
tina.drinkBeer();

function Programmer(name, salary) {
  //this.name = name;
  Person.call(this, name);
  this.salary = salary;
}
Programmer.prototype.codeApps = function () {
  console.log(this.name + " implement apps");
};
let hannah = new Programmer("Hannah", 4000);
hannah.codeApps();
//now, the programmer hannah cannot drink beer
//make the programmer prototype inherits from person prototype
Object.setPrototypeOf(Programmer.prototype, Person.prototype);
hannah.drinkBeer();
