function makeCalculation(a, b) {
  function asyncFunc(resolve, reject) {
    if (b === 0) {
      reject("can't not divide with 0");
    } else {
      setTimeout(() => {
        console.log("calculating stuff");
        const division = a / b;
        resolve(division);
      }, 1000);
    }
  }
  return new Promise(asyncFunc);
}
function sendStuffToBackend(result) {
  function asyncFunc(resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
  return new Promise(asyncFunc);
}

async function makeCalculationAndSendStuffToBackend(a, b) {
  const result = await makeCalculation(a, b);
  const msg = await sendStuffToBackend(result);
  return msg;
}

makeCalculationAndSendStuffToBackend(10, 5).then((x) => console.log(x));
