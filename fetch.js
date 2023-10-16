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
async function getPokemonList(url) {
    // Make a fetch request to the url passed in.
    // When the request finishes check to make sure it was ok.
    // If it was ok then convert the response to json.
    // Call the doStuffList function, passing in the data.
    const response = await fetch(url);
    //checks for successful response
    if (response.ok) {
      // changes to json, gets promise
      const listData = await response.json();
      doStuffList(listData);
    }
}
function doStuff(data) {
    const outputId = document.querySelector("#output")
    results = data;
    const htmlOutput = `<h2> ${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="${results.name}'s image">`;
    outputId.innerHTML = htmlOutput;
    
    console.log("first: ", results);
};
function sortPokemon(list) {
    
}

function doStuffList(data) {
    const listId = document.querySelector("#outputList");
    let pokeList = data.results;
    // let listOutput = "";
    // let i = 0;
    // do{
    //     listOutput += `<li>${pokeList.name}</li>`;
    //     i++;

    // }while (i < pokeList.length);
    pokeList.forEach((item) =>{
        const listOutput = `<li>${item.name}</li>`;
        listId.innerHTML += listOutput;
    })

    // listId.innerHTML = listOutput;
    
    console.log(data);
} 

getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);