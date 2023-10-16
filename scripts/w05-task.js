/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    
    temples.forEach(temple => {
        let templeArticle = document.createElement("article");
        let templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
        let templeImage = document.createElement('img');
        templeImage.setAttribute('src', temple.imageUrl);
        templeImage.setAttribute('alt', temple.location);

        templeArticle.appendChild(templeName)
        templeArticle.appendChild(templeImage);

        templesElement.appendChild(templeArticle);

        templeList.push(temple);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const data = await response.json();
        // console.log(data);
        displayTemples(data);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = (temples) => { 
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah") ));
            return;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah") ));
            return;
        case "older":
            let date = (1950, 0, 1);
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < date ));
            return;
        default:
            displayTemples(temples);
            return;
    }
}

getTemples();
//console.log(templeList);

/* Event Listener */
document.querySelector("#sortBy").addEventListener('change', () => sortBy(templeList));