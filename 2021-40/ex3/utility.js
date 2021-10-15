//max([]); // returns the max value of given values (array)
//min([]); // returns the min value of given values (array)
function max(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function min(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
//let myarray = [5, 2, 9, 1];
//console.log(max(myarray)); // 4

// let obj = { min, max };
export { min, max };
