function Person(fname, lname) {
  if (this instanceof Person) {
    this.firstName = fname;
    this.lastName = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }
}

var hannah = new Person("Hannah", "Nguyen");
console.log(hannah);
console.log(hannah.firstName);

//if don't use new keyword
var obj = Person("jack", "smith");
console.log(obj);
