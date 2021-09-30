function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello, ${this.name}!`);
  };
  this.sayDelayedHello = function () {
    setTimeout(this.sayHello, 1000);
  };
  // INSERT CODE HERE
  this.sayHello = this.sayHello.bind(this);
}
let jack = new Person("jack");
jack.sayDelayedHello();
let tina = new Person("tina");
tina.sayDelayedHello();
//The sayDelayedHello is not working. When invoking the Person() function with keyword this, this refers to jack or tina depending on the line (12 or 14). Add code to line 10 where you replace the sayHello function with a copy using function binding, this new version of the original will point to proper this, either jack or tina in this example.
