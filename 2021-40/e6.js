var fs = require("fs");
let data = fs.readFileSync("names.json", "utf8");
let obj = JSON.parse(data);
//show object
//console.log(obj);

//list names and amount
let objList = obj.names;
//console.log(objList);

//List names and amounts, order by amount, most popular first
let ascending = objList.sort((a.amount, b.amount) =>{
    return a.amount - b.amount;
});
console.log(ascending);

//List names in alphabetical order
const listNameInOrder = () => {
  let nameArray = objList.map((obj) => {
    return obj.name;
  });
  return nameArray.sort();
};

//console.log(listNameInOrder());

//return total amount of all the names
const total = () => {
  let total = 0;
  for (let item of objList) {
    total += item.amount;
  }
  return total;
};
// console.log(total());
