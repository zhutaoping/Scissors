"use strict";

const SELEARRAY = ["rock", "paper", "scissors"];
let playerPoint = 0;
let computerPoint = 0;

// Start the game
game();

// computer selection
function computerPlay() {
  const computerSelection =
    SELEARRAY[Math.trunc(Math.random() * 3)].toLocaleLowerCase();
  return computerSelection;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    console.log(`You: ${playerSelection}`);
    let computerSelection = computerPlay();
    console.log(`Computer: ${computerSelection}`);

    // Compare Selections
    playRound(playerSelection, computerSelection);

    console.log(`${playerPoint} to ${computerPoint}`);
  }

  console.log(`GAME OVER`);

  if (playerPoint > computerPoint) {
    console.log(`You Win! ${playerPoint} to ${computerPoint}`);
  } else if (playerPoint < computerPoint) {
    console.log(`You Lose! ${playerPoint} to ${computerPoint}`);
  } else {
    console.log(`Tie! ${playerPoint} to ${computerPoint}`);
  }
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
