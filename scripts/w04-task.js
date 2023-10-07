/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Hollie Galbraith",
    photo: "/images/selfie.jpg",
    favoriteFoods: [
        "waffles", "chik fil a", "ice cream", "peanut butter"
    ],
    hobbies: [
        "playing games with my boys", "hanging out with my neices and nephews", "cooking new recipes",
        "trying new things"
    ],
    placesLives: [
    ]
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLives.push (
    {place:"Idaho Falls, ID", 
    length: "12 years"},
    {place:"Pleasant Grove, UT", 
    length: "17 years"},
    {place:"Provo, UT", 
    length: "1 years"},
    {place:"Lindon, UT", 
    length: "3 months"},
    {place:"Elko, NV", 
    length: "1 year"});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let imgProperty = document.querySelector('img');
imgProperty.setAttribute('src', myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let newListItem = document.createElement("li");
    newListItem.textContent = food;
    document.querySelector("#favorite-foods").appendChild(newListItem);
});
/* Hobbies List */
myProfile.hobbies.forEach((hobbies) => {
    let newListItem = document.createElement("li");
    newListItem.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(newListItem);
});


/* Places Lived DataList */
myProfile.placesLives.forEach((places) => {
    let dt = document.createElement("dt");
    dt.textContent = places.place;
    let dd = document.createElement("dd");
    dd.textContent = places.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

