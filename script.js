console.log("test");

// pseudocod
// 1. click on the show ASL
// 2. i want the button SHOW ASL
// 3. i want to show the FIGHT button
// 4. i want to show the asl
// to be able to click the button i gotta take the element from html and bring it in JS

let showHeroesBtn = document.querySelector("#show-heroes");
let startFightBtn = document.querySelector("#start-fight");
let heroesContainer = document.querySelector(".heroes-container");
let showWinnerContainer = document.querySelector("#show-winner");
showWinnerContainer.innerHTML = epicfight.findWinner();

showHeroesBtn.addEventListener("click", showHeroesFunc);

function showHeroesFunc() {
  showHeroesBtn.classList.add("d-none");
  startFightBtn.classList.add("d-block");
  heroesContainer.classList.add("d-flex");
}
startFightBtn.addEventListener("click", startFightFunc);

function startFightFunc() {
  startFightBtn.classList.remove("d-block");
  showWinnerContainer.classList.add("d-block");
}
