//const axios = require("axios");
import axios from "axios";

async function addLocation(obj) {
  const add = await axios.post("http://localhost:8080/locations", obj);
  return add.data.id;
}

async function deleteLocation(id) {
  const respond = await axios.delete(`http://localhost:8080/locations/${id}/`);
  return respond.status;
}
async function fetchAllLocations() {
  const respond = await axios.get("http://localhost:8080/locations");
  return respond.data;
}
async function fetchLocation(id) {
  let respond = await axios.get("http://localhost:8080/locations");
  let locationArr = respond.data;
  for (let i = 0; i < locationArr.length; i++) {
    if (locationArr[i].id == id) {
      return locationArr[i];
    }
  }
}

const main = async () => {
  try {
    let id = await addLocation({ lat: 71, lon: 60 });
    console.log(id); // outputs id of the added location

    let statusCode = await deleteLocation(id);
    console.log(statusCode); // 204

    let locations = await fetchAllLocations();
    console.log(locations); // outputs all locations

    let location = await fetchLocation(1);
    console.log(location); // outputs location with id of 1
  } catch (err) {
    console.log(err);
  }
};
main();
