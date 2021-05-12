"use strict";
const button = document.querySelector(".js-button");
const numberUser = document.querySelector(".js-yourNumber");
const Clue = document.querySelector(".js-clue");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const numberRandom = parseInt(getRandomNumber(100));
console.log(numberRandom);

const userValue = parseInt(numberUser.value);
console.log(userValue);

const messageClue = Clue.value;

function play(event) {
  event.preventDefault();
  if (userValue === numberRandom) {
    messageClue.innerHTML = "Has ganado campeona!!!";
  } else if (userValue > numberRandom) {
    messageClue.innerHTML = "Demasiado alto";
  } else if (userValue < numberRandom) {
    messageClue.innerHTML = "Demasiado alto";
  } else {
    messageClue.innerHTML = "El número debe estar entre 1 y 100";
  }
}

button.addEventListener("click", play);
