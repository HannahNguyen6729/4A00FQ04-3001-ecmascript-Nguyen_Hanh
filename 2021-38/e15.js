let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
user.sayHello();
let f = user.sayHello;
f(); //Hello, undefined!
setTimeout(f, 1000); //Hello, undefined!
//Why is that?
//because when passing function sayHello to setTimeout, this keyword will become global object so it can't refer to the object user

function sayHello() {
  user.sayHello();
}
setTimeout(sayHello, 1000); //now it works because inside sayHello function, user.sayHello() is an object dot function notation so this keyword refers to object user.

setTimeout(() => user.sayHello(), 9000); //Hello, jack!

//What happens if you change the user object after calling timeout? Why?
user.sayHello = function () {
  console.log("does it work?");
};
//when function user.sayHello is invoked in setTimeout(), it will show the string "does it work?" because that command will run before setTimeout() run
