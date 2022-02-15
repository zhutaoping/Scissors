"use strict";

const SELEARRAY = ["rock", "paper", "scissors"];
let playerPoint = 0;
let computerPoint = 0;

// computer selection
function computerPlay() {
  const computerSelection =
    SELEARRAY[Math.trunc(Math.random() * 3)].toLocaleLowerCase();
  return computerSelection;
}

function playerPlay() {
  const playerSelection = this.classList[0];
  game(playerSelection);
}

function game(s) {
  const playerSelection = s;
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  if (playerPoint > 4 || computerPoint > 4) {
    result(playerPoint, computerPoint);
  }
}

function result(playerPoint, computerPoint) {
  // console.log("\n");
  console.log("GAME OVER!!!!!!!");
  if (playerPoint > computerPoint) {
    runningScore.innerHTML = `GMAE OVER<br>You Win! ${playerPoint} to ${computerPoint}`;
    scoreDiv.appendChild(runningScore);
  } else if (playerPoint < computerPoint) {
    runningScore.innerHTML = `GMAE OVER<br>You Lose! ${playerPoint} to ${computerPoint}`;
    scoreDiv.appendChild(runningScore);
  } else {
    runningScore.innerHTML = `GMAE OVER<br>Tie ${playerPoint} to ${computerPoint}`;
    scoreDiv.appendChild(runningScore);
  }

  buttons.forEach((button) => {
    button.removeEventListener("click", playerPlay);
  });
}

function playRound(player, computer) {
  switch (true) {
    case player == computer:
      runningScore.innerHTML = `Tie<br>${playerPoint} to ${computerPoint}`;
      scoreDiv.appendChild(runningScore);
      break;
    case player == "rock" && computer == "scissors":
      playerPoint++;
      runningScore.innerHTML = `You Win!<br>Rock beats Scissors<br>${playerPoint} to ${computerPoint}`;
      scoreDiv.appendChild(runningScore);
      break;
    case computer == "rock" && player == "scissors":
      computerPoint++;
      runningScore.innerHTML = `You Lose!<br>Rock beats Scissors<br>${playerPoint} to ${computerPoint}`;
      scoreDiv.appendChild(runningScore);
      break;
    case player == "paper" && computer == "rock":
      playerPoint++;
      runningScore.innerHTML = `You Win!<br>Paper beats Rock<br>${playerPoint} to ${computerPoint}`;
      scoreDiv.appendChild(runningScore);
      break;
    case computer == "paper" && player == "rock":
      computerPoint++;
      runningScore.innerHTML = `You Lose!<br>Paper beats Rock<br>${playerPoint} to ${computerPoint}`;
      scoreDiv.appendChild(runningScore);
      break;
    case player == "scissors" && computer == "paper":
      playerPoint++;
      runningScore.innerHTML = `You Win!<br>Scissors beats Paper<br>${playerPoint} to ${computerPoint}`;
      scoreDiv.appendChild(runningScore);
      break;
    case computer == "scissors" && player == "paper":
      computerPoint++;
      runningScore.innerHTML = `You Lose!<br>Scissors beats Paper<br>${playerPoint} to ${computerPoint}`;
      scoreDiv.appendChild(runningScore);
      break;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playerPlay);
});

const scoreDiv = document.querySelector(".running-score");
const runningScore = document.createElement("h1");
