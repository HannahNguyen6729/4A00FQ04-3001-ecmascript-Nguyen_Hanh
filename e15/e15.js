let lottoArray = process.argv.slice(2);
for (let i = 0; i < lottoArray.length; i++) {
  lottoArray[i] = Number(lottoArray[i]);
}
console.log("this is LOTTO NUMBERS");
console.log(lottoArray);

//create random number array
const generatorRandomNumber = (highestNumber, size) => {
  let randomArray = [];
  for (let i = 0; i < size; i++) {
    let x = Math.floor(Math.random() * highestNumber + 1);
    //check if this function doen't find the same value, return -1
    if (randomArray.indexOf(x) == -1) {
      randomArray.push(x);
    } else {
      //if found a duplicate value, decrease i variable and create a new value of x
      i--;
    }
  }
  return randomArray;
};

//compare 2 arrays
const compareArrays = (arr1, arr2) => {
  let count = 0;
  for (let i = 0; i < arr1; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (lottoArray[i] == arr2[j]) {
        count++;
      }
    }
  }
  return count;
};

//function informs when “highscore” is found
const mainFunction = () => {
  let newCount = 0;
  let time = 0;
  let flag = true;
  do {
    time++;
    let randomArray = generatorRandomNumber(10, lottoArray.length);
    newCount = compareArrays(lottoArray, randomArray);
    console.log("This is random number array: ");
    console.log("[" + randomArray + "]" + "    -  CORRECT:   " + newCount);
    if (newCount == lottoArray.length) {
      console.log(
        "You got " + newCount + " correct. It took " + time + " time to win."
      );
      flag = false;
    }
  } while (flag);
};
mainFunction();
