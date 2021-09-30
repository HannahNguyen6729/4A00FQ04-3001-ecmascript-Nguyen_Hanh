let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

let myfunc = user.sayHello;
myfunc(); //Hello, undefined!
//reason: because when you invoke myfunc(), the function sayHello() is invoked. However, this keyword inside sayHello function now does not refer to user object anymore, it refers to global object(node)/ window(browser), therefore this.name == global.name then result is undefined
