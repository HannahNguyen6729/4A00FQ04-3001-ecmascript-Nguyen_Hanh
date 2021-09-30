function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  console.log(this instanceof Person);
}

var hannah = new Person("Hannah", "Nguyen");
var jack = new Person("Jack", "Smith");
var tom = new Person("Tom", "Manner");
console.log(hannah);
// console.log(jack);
// console.log(tom);
console.log(hannah.firstName);

//if don't use new keyword
var obj = Person("jack", "smith");
console.log(obj);
//obj: undefined

//what is the output of this when using new keyword or without?
//using NEW KEYWORD: that constructor function will create a new object.
//without NEW KEYWORD: that constructor function will become normal function
//for example: var jack = Person("Jack", "Smith"); --> jack becomes normal function, returning undefined
