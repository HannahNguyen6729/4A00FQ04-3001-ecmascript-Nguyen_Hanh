function makeCalculation(a, b) {
  function funcAsyn(resolve, reject) {
    setTimeout(() => {
      console.log("caculating stuff");
      if (b != 0) {
        const division = a / b;
        resolve(division);
      } else {
        // const err = "cannot divide with zero.";
        reject("cannot divide with zero.");
      }
    }, 1000);
  }
  const p = new Promise(funcAsyn);
  return p;
}
function sendStuffToBackend(value) {
  function funcAsyn(resolve, reject) {
    const random = Math.floor(Math.random() * 2);
    if (random == 0) {
      reject("failed to connect to backend.");
    } else if (random == 1) {
      setTimeout(() => {
        console.log(`sending to backend ${value}`);
        resolve("done");
      }, 1000);
    }
  }
  const m = new Promise(funcAsyn);
  return m;
}
makeCalculation(10, 5)
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
