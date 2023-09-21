/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}
function addNumbers() {
  let addNumber1 = parseInt(document.getElementById("add1").value);
  let addNumber2 = parseInt(document.getElementById("add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (subtract1, subtract2) {
  return subtract1 - subtract2;
};

const subtractNumbers = function () {
    let subtractNumber1 = parseInt(document.getElementById("subtract1").value);
    let subtractNumber2 = parseInt(document.getElementById("subtract2").value);
    document.querySelector("#difference").value = subtract( subtractNumber1, subtractNumber2 );
    };

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => {
  return factor1 * factor2;
};
const multiplyNumbers = () => {
    let multiplyFactor1 = parseInt(document.getElementById("factor1").value);
    let multiplyFactor2 = parseInt(document.getElementById("factor2").value);
    document.querySelector("#product").value = multiply( multiplyFactor1, multiplyFactor2 );
    };

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
  return dividend / divisor;
}
const divideNumbers = () => {
    let divideDividend = parseInt(document.getElementById("dividend").value);
    let divideDivisor = parseInt(document.getElementById("divisor").value);
    document.querySelector("#quotient").value = divide( divideDividend, divideDivisor );
    }

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numbersArray;


/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(num => num % 2 !== 0);


/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(num => num % 2 === 0);


/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((total, num) => total + num);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(num => num * 2);


/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(num => num * 2).reduce((total, num) => total + num); 
