// write function for computer choice
const computerSelection = () => {
  let gameInput = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return gameInput[idx];
};

//write input from user
// let playerSelection = prompt("enter your choice","rock");
//        playerSelection =  playerSelection.toLowerCase();
let playerScore = 0;
let computerScore = 0;
// write function of single round
const singleRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore += 1;
    return `you win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    playerSelection == computerSelection ||
    playerSelection == computerSelection ||
    playerSelection == computerSelection
  ) {
    return `it's a tie`;
  } else {
    console.log(playerSelection, computerSelection);
    return "please enter valid option";
  }
};

// write function game loop
let game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("enter your choice", "rock");
    playerSelection = playerSelection.toLowerCase();
    let computerChoice = computerSelection();
    console.log(singleRound(playerSelection, computerChoice));
  }
  if (playerScore > computerScore) {
    return "congratulations you won";
  } else if (playerScore < computerScore) {
    return "sorry! you loose";
  } else {
    return "draw";
  }
};
console.log(game());
