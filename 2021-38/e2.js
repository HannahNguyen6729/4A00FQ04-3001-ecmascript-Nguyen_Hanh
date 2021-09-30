//ex2:
function doIt(value) {
  function inner() {
    if (value) {
      console.log("world");
    } else {
      console.log("hello");
    }
  }
  return inner;
}

doIt(false)(); // outputs hello
doIt(true)(); // outputs world
