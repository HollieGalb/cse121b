/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1, add2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
    let sub1 = Number(document.querySelector('#subtract1').value);
    let sub2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(sub1, sub2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
let todayDate = new Date();
let year;
year = todayDate.getFullYear();

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numbersArray;
/* Output Odds Only Array */ 
document.querySelector('#odds').innerHTML = numbersArray.filter((number) => (number%2 !== 0 ));

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter((number) => (number%2 === 0 ));
/* Output Sum of Org. Array */
let value = 0;
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, value);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map((s) => s * 2);
/* Output Sum of Multiplied by 2 Array */
let newNumbers = numbersArray.map((num) => num * 2);
document.querySelector('#sumOfMultiplied').innerHTML = newNumbers.reduce((sum, number) => sum + number);