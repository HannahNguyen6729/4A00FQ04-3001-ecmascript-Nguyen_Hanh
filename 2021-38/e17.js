let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // let f = this.sayHello;
    // setTimeout(f, 1000);
    setTimeout(this.sayHello, 1000);
  },
};
user.sayHello(); //hello, jack
user.sayDelayedHello(); //Hello, undefined!

//What about now?
function helper() {
  user.sayHello();
}
let user1 = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000);
  },
};
//user1.sayHello();
user1.sayDelayedHello();
//Why does it work now?
//because now inside this function:
//function () {setTimeout(helper, 1000);}
//helper function is invoked as a normal function: helper(), then user.sayHello() is called as a object.function()
