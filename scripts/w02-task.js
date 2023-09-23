/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Hollie Galbraith";
let currentYear = new Date().getFullYear();
let profilePicture = "images/selfie.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img[src="images/placeholder.png"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ['Almonds', ' Waffles',' Peanut Butter', ' Syrup'];
//foodElement.textContent(favFoods);
//document.body.appendChild(foodElement);
let foodItems = " ";
foodElement.innerHTML += `<br>${favFoods}`;

//step 3
let lastFavFood = ' Oats';
favFoods.push(lastFavFood);

//step 5
foodElement.innerHTML += `<br>${favFoods}`;

//step 6
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

//step8
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;



