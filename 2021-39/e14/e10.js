import fetch from "node-fetch";
import require from "readline-sync";

//var id = require.questionInt("Please give star war character id");
var myArgs = process.argv.slice(2);
let idArr = myArgs.map((id) => {
  return Number(id);
});
console.log("myArgs: ", idArr);

async function fetchAll(idArr) {
  // console.log(arguments);
  // let argArray = Array.from(arguments);
  const objArray = idArr.map((id) => {
    return fetchAllTitles(id);
  });
  const objList = await Promise.all(objArray);
  return objList;
}
fetchAll(idArr).then((data) => console.log(data));

async function fetchAllTitles(id) {
  const hr = await fetch(`https://swapi.dev/api/people/${id}/`);
  const obj = await hr.json();
  const filmLinkArray = obj.films;
  const filmTitleArray = filmLinkArray.map((url) => {
    const filmTitle = fetchTitle(url);
    return filmTitle;
  });
  const movieList = await Promise.all(filmTitleArray);
  return {
    name: obj.name,
    movies: movieList,
  };
}

async function fetchTitle(url) {
  const hr = await fetch(url);
  const obj = await hr.json();
  return obj.title;
}
