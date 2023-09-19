/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Daphne Avril Museruka";
const currentYear = 2023;
const profilePicture = "images/profile-pic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementsByTagName("img")[0];
// const favFood = document.getElementsByClassName("fav-food")[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Pfofile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ["Pizza", "Pasta", "Burgers", "Fries", "Ice Cream"];
foodElement.innerHTML = favFoods;
const favFood = "Shwarma";
favFoods.push(favFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
