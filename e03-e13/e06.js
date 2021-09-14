function weight() {
  var w = 1000;
  if (w > 60) {
    var name = "Honey";
    console.log(name + "weights: " + w + " kg");
  }
  console.log(name + " weights: " + w + " kg. You are thin, need to eat more");
}
weight();

function weight2() {
  let w = 1000;
  if (w > 60) {
    let name = "Honey2";
    console.log(name + "weights: " + w + " kg");
  }
  console.log(name + " weights: " + w + " kg. You are thin, need to eat more");
}
weight2();

function weight3() {
  const w = 1000;
  w = 2000;
  if (w > 60) {
    const name = "Honey3";
    console.log(name + "weights: " + w + " kg");
  }
  console.log(name + " weights: " + w + " kg. You are thin, need to eat more");
}
weight3();
