// Fix this with three different ways:
// 1. Using closures and anonymous inner function
function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    let _this = this;
    setInterval(function () {
      _this.tick;
    }, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second, uses render

// 2. Using arrow syntax
// function Clock() {
//   this.time = new Date().toString();
//   this.startInterval = function () {
//     setInterval(() => {
//       this.tick;
//     }, 1000);
//   };
//   this.tick = function () {
//     this.time = new Date().toString();
//     console.log(this.render());
//   };
//   this.render = function () {
//     return this.time;
//   };
// }

// let clock = new Clock();
// console.log(clock.render());
// clock.startInterval();

//3. Using function binding
// function Clock() {
//   this.time = new Date().toString();
//   this.startInterval = function () {
//     setInterval(this.tick, 1000);
//   };
//   this.tick = function () {
//     this.time = new Date().toString();
//     console.log(this.render());
//   };
//   this.tick = this.tick.bind(this);
//   this.render = function () {
//     return this.time;
//   };
// }

// let clock = new Clock();
// console.log(clock.render());
// clock.startInterval();
