let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    //let f = this.sayHello;
    setTimeout(copy, 1000);
  },
};
let copy = user.sayHello.bind(user);
user.sayDelayedHello();
//Now instead of sending the sayHello function to setTimeout create a copy of the sayHello function. Use the bind and specify what this should refer. Then send the copied function with proper this to setTimeout
