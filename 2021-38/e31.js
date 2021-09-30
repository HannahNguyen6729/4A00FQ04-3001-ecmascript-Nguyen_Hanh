class Person {
  constructor(name) {
    this.name = name;
    //this.hello = this.hello.bind(this);

    //a) Fix the `this` problem by moving the `hello()` function inside of constructor.
    this.hello = () => {
      console.log(`hello ${this.name}`);
    };
  }
  delayedHello() {
    setTimeout(this.hello, 1000);
  }

  //   hello() {
  //     console.log(`hello ${this.name}`);
  //   }
}
let jack = new Person("jack");
jack.delayedHello();

//b) Fix the `this` problem using class fields (which does the same than in a)

class Person1 {
  name = "jack";
  hello = () => {
    console.log(`hello ${this.name}`);
  };

  delayedHello() {
    setTimeout(this.hello, 1000);
  }
}
let jack1 = new Person1();
jack1.delayedHello();
