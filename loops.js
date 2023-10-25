myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

const htmlFoodsId = document.querySelector("#favorite-foods");
const htmlPlacesId = document.querySelector("#places-lived");

function sortFoodString(list){
  return `<li>${list}</li>`;
}

function sortPlaceString(list){
  return `<dt>${list.place}</dt><dd>${list.length}</dd>`;
}

function listMarkup(list,callback){
  const htmlList = list.map(callback);
  return htmlList.join("");
}

htmlFoodsId.innerHTML = listMarkup(myInfo.favoriteFoods, sortFoodString);
htmlPlacesId.innerHTML = listMarkup(myInfo.placesLived, sortPlaceString);



// const forEachArray = (item) =>{
//     let listItem = document.createElement('li');
//     listItem.textContent = item;
//     htmlFoodsId.appendChild(listItem);
// }
// myInfo.favoriteFoods.forEach(forEachArray);


// const mapArray = (item) => {
//     return `<li>${item}</li>`
// }

// const foodListElements = myInfo.favoriteFoods.map(mapArray);
// // we need to flatten the array of strings into one big string. .join does this.
// htmlFoodsId.innerHTML = foodListElements.join(' ');


  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);