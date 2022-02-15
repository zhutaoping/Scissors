"use strict";

const SELEARRAY = ["rock", "paper", "scissors"];
let playerPoint = 0;
let computerPoint = 0;

// Start the game
// game();

// computer selection
function computerPlay() {
  const computerSelection =
    SELEARRAY[Math.trunc(Math.random() * 3)].toLocaleLowerCase();
  return computerSelection;
}

function playerPlay() {
  const playerSelection = this.classList[0];
  console.log(this);
  game(playerSelection);
}

function game(s) {
  // let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
  // let playerSelection = playerPlay();
  const playerSelection = s;
  console.log(`You: ${playerSelection}`);
  let computerSelection = computerPlay();
  console.log(`Computer: ${computerSelection}`);

  // Compare Selections
  playRound(playerSelection, computerSelection);

  if (playerPoint > 4 || computerPoint > 4) {
    result(playerPoint, computerPoint);
  }
}

function result(playerPoint, computerPoint) {
  // console.log("\n");
  console.log("GAME OVER!!!!!!!");
  if (playerPoint > computerPoint) {
    console.log(`You Win! ${playerPoint} to ${computerPoint}`);
  } else if (playerPoint < computerPoint) {
    console.log(`You Lose! ${playerPoint} to ${computerPoint}`);
  } else {
    console.log(`Tie! ${playerPoint} to ${computerPoint}`);
  }

  buttons.forEach((button) => {
    button.removeEventListener("click", playerPlay);
  });
}

function playRound(player, computer) {
  switch (true) {
    case player == computer:
      console.log("Tie!");
      break;
    case player == "rock" && computer == "scissors":
      playerPoint++;
      console.log("You Win! Rock beats Scissors");
      break;
    case computer == "rock" && player == "scissors":
      computerPoint++;
      console.log("You Lose! Rock beats Scissors");
      break;
    case player == "paper" && computer == "rock":
      playerPoint++;
      console.log("You Win! Paper beats Rock");
      break;
    case computer == "paper" && player == "rock":
      computerPoint++;
      console.log("You Lose! Paper beats Rock");
      break;
    case player == "scissors" && computer == "paper":
      playerPoint++;
      console.log("You Win! Scissors beats Paper");
      break;
    case computer == "scissors" && player == "paper":
      computerPoint++;
      console.log("You Lose! Scissors beats Paper");
      break;
  }
}

// const seleRock = document.querySelector(".rock");
// const selePaper = document.querySelector(".paper");
// const seleScissors = document.querySelector(".scissors");

// seleRock.addEventListener("click", playerPlay);
// selePaper.addEventListener("click", playerPlay);
// seleScissors.addEventListener("click", playerPlay);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playerPlay);
});
