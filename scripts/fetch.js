// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(urlList) {
  const response = await fetch(urlList);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuff(data) {
  results = data;
  var output = document.querySelector("#output");
  const html = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="${results.name}" />`;
  output.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  var outputList = document.querySelector("#outputList");
  pokeList.forEach((element) => {
    const html = `<li>${element.name}</li>`;
    outputList.innerHTML += html;
  });

  console.log("list: ", results);
}




function compare(a, b) {
  if (a.name > b.name) {
    // sort b before a
    return 1;
  } else if (a.name < b.name) {
    // a and b different but unchanged (already in the correct order)
    return -1;
  } else return 0; // a and b are equal
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}





getPokemon(url);
getPokemonList(urlList);
console.log("second: ", results);
