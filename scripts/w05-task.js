/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  templesElement.innerHTML = "";
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  if (response.ok) {
    templeList = await response.json();
    displayTemples(templeList);
  }

  console.log(templeList);
};

/* reset Function */
const reset = function () {
  templesElement.innerHTML = "";
};

/* sortBy Function */
// Sort the list of temples by the selected value of the HTML select element with an ID of sortBy. The preset selections include temples located in the state of Utah, those outside the state of Utah, and temples built before 1950 on the list.

// Declare a function expression named sortBy.
// The function should accept a argument in a parameter named temples.
// In this function, first call the reset function to clear the output.
// Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
// Use a switch statement that uses the filter value as the selector responding to four (4) cases.
// For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
// "utah": filter for temples where the location contains "Utah" as a string.
// "nonutah": filter for temples where the location does not contain "Utah" as a string.
// "older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
// "all": no filter. Just use temples as the argument.

const sortBy = function (temples) {
  reset();
  let filter = document.querySelector("#sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "nonutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        temples.filter(
          (temple) => new Date(temple.dedication) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();

/* Event Listener */
