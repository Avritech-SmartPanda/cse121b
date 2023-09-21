/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Daphne Avril Museruka",
  photo: "images/profile-pic.jpg",
  favoriteFoods: ["Pizza", "Pasta", "Burgers", "Fries", "Ice Cream", "Shwarma"],
  hobbies: ["Fishing", "Drawing", "Coding", "Singing", "Photography"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Guruve, Zimbabwe",
  length: "9 years",
});
myProfile.placesLived.push({
  place: "Harare, Zimbabwe",
  length: "1 year",
});
myProfile.placesLived.push({
  place: "Mutare, Zimbabwe",
  length: "3 years",
});
myProfile.placesLived.push({
  place: "Johannesburg, South Africa",
  length: "13 years",
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let foodItem = document.createElement("li");
  foodItem.textContent = food;
  document.querySelector("#favorite-foods").appendChild(foodItem);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let hobbyItem = document.createElement("li");
  hobbyItem.textContent = hobby;
  document.querySelector("#hobbies").appendChild(hobbyItem);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
  let placeItem = document.createElement("dt");
  let placeLength = document.createElement("dd");
  placeItem.textContent = place.place;
  placeLength.textContent = place.length;
  document.querySelector("#places-lived").appendChild(placeItem);
  document.querySelector("#places-lived").appendChild(placeLength);
});
