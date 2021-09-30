// function String(_string){
//     this.string = _string;
// }
String.prototype.isPalindrome = function () {
  let n = this.length;
  let flag = true;
  for (let i = 0; i < n / 2; i++) {
    if (this[i].localeCompare(this[n - 1 - i]) != 0) {
      flag = false;
    }
  }
  return flag;
};

console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false
