"use strict";
const button = document.querySelector(".js-button");
const numberUser = document.querySelector(".js-yourNumber");
const Clue = document.querySelector(".js-clue");
const poss = document.querySelector(".js-try");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const numberRandom = getRandomNumber(100);
console.log(numberRandom);

function play(event) {
  event.preventDefault();
  const userValue = parseInt(numberUser.value);
  console.log(userValue);

  if (userValue === numberRandom) {
    Clue.innerHTML = "Has ganado campeona!!!";
  } else if (userValue > numberRandom) {
    Clue.innerHTML = "Demasiado alto";
  } else if (userValue < numberRandom) {
    Clue.innerHTML = "Demasiado bajo";
  } else {
    Clue.innerHTML = "El número debe estar entre 1 y 100";
  }
}

let count = 0;
function Counter() {
  count++;
  poss.innerHTML = ` Número de intentos ${count}`;
  console.log(poss.innerHTML);
}

button.addEventListener("click", play);
button.addEventListener("click", Counter);
