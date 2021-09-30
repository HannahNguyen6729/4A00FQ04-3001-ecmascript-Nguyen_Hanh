let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // this refers to user
    //console.log(this);
    let thisWorks = this;
    setTimeout(function () {
      thisWorks.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello(); //Hello, Jack!
//What happens if you now use:setTimeout(function () { thisWorks.sayHello();}, 1000);
//because of closure feature, thisWorks refers to this out of scope setTimeout(...) which is the user object. therefore, the function user.sayHello() will be invoked
