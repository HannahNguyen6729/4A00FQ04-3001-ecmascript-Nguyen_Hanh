// let user = {
//   name: "Jack",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     setTimeout(function () {
//       this.sayHello();
//     }, 1000);
//   },
// };
// user.sayDelayedHello(); //TypeError: this.sayHello is not a function
//Once again, why does it fail in line 9?
//because after 1 second, the function: function () { this.sayHello(); } is invoked as a normal function so this=global, global object doen't have method sayHello()

//Now comment away lines 8 - 10 and use arrow syntax: setTimeout(() => { this.sayHello() }, 1000)
let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(() => {
      this.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello(); //hello, jack!

//in Babel
// sayDelayedHello: function sayDelayedHello() {
//     var _this = this;
//     setTimeout(function () {
//       _this.sayHello();
//     }, 1000);

// in Babel, in function function () {_this.sayHello();}
//   this keyword is replaced by a variable: var _this = this;  _this variablle equals user object. Due to closure feature, when function function () { _this.sayHello();    is invoked, it will call user.sayHello()
