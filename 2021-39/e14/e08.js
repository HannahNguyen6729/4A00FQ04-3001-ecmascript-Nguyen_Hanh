import fetch from "node-fetch";
import require from "readline-sync";

var id = require.questionInt("Please give star war character id");
async function fetchTitle(id) {
  const hr = await fetch(`https://swapi.dev/api/people/${id}/`);
  const obj = await hr.json();
  return obj.name;
}

fetchTitle(id).then((title) => console.log(title));
