function doIt() {
  console.log(this); //global object
  console.log(this == global); //true
  this.myvariable = 5;
}

doIt();
console.log(myvariable);
