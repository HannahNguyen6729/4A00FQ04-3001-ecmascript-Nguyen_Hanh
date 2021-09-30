let user = {
  firstName: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};
let myFunction = user.sayHello.bind(user);
myFunction();
//The ‘Jack’ here is not printed. By using function binding, create a copy of the user.sayHello and set this to refer to user. Then call the function, it should work.
