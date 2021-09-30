class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("radius must be >0");
    }
  }
}

let c = new Circle(50); // sets radius
c.radius = 30; // changes radius, uses setter
console.log(c.radius); // returns radius, uses getter
c.radius = -70; // crashes app, radius must be > 0
