var Person = function (fname, lname) {
  if (!(this instanceof Person)) {
    return new Person(fname, lname);
  }
  this.firstName = fname;
  this.lastName = lname;
};

var obj1 = new Person("jack", "smith");
console.log(obj1.firstName); // 'jack'

var obj2 = Person("jack", "smith");
console.log(obj2.firstName); // 'jack'
