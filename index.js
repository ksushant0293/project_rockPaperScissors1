// write function for computer choice
const computerSelection = () => {
  let gameInput = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return gameInput[idx];
};

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
  } else {
    return `it's a tie`;
  }
};

function playRound(e) {
  // console.log(e.target);
  if (e) {
    let playerSelection = e.target.innerText;
    //console.log(playerSelection);
    let computerChoice = computerSelection();
    const outcomeDiv = document.querySelector(".outcome");
    const p = document.createElement("p");
    let firstRound = singleRound(playerSelection, computerChoice);
    p.innerText = firstRound;
    outcomeDiv.appendChild(p);
  }

  const playerScoreSpan = document.querySelector(".playerScore");
  const computerScoreSpan = document.querySelector(".computerScore");

  playerScoreSpan.innerText = `playerScore: ${playerScore}       `;
  computerScoreSpan.innerText = `computerScore: ${computerScore}     `;
  scoreUpdate(playerScore, computerScore);
}
function restart() {
  playerScore = 0;
  computerScore = 0;
}

const scoreUpdate = (playerScore, computerScore) => {
  if (playerScore == 5 || computerScore == 5) {
    const outcomeDiv = document.querySelector(".outcome");
    const h2 = document.createElement("h2");
    h2.innerText = "congratulations you won!";
    if (playerScore < computerScore) {
      h2.innerText = "sorry you lost!";
    }
    outcomeDiv.appendChild(h2);
    restart();
    return;
  }
};

const buttons = document.querySelectorAll("button");
//console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
playRound();
