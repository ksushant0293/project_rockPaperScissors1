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
}

function playRound(e) {
  if (playerScore == 5 || computerScore == 5) {
    const outcomeDiv = document.querySelector(".outcome");
    outcomeDiv.innerHTML = "<h2>congratulations you won! & please click on reset  button to play again</h2>";
    if (playerScore < computerScore) {
      outcomeDiv.innerHTML = "<h2>sorry you lost! & please click on reset  button to play again</h2>";
    }
    return ;
  }
  
  if (e) {
    let playerSelection = e.target.innerText;
    let computerChoice = computerSelection();
    const outcomeDiv = document.querySelector(".outcome");
    let firstRound = singleRound(playerSelection, computerChoice);
    outcomeDiv.innerText = firstRound;
  }

  const playerScoreSpan = document.querySelector(".playerScore");
  const computerScoreSpan = document.querySelector(".computerScore");

  playerScoreSpan.innerText = `playerScore: ${playerScore}       `;
  computerScoreSpan.innerText = `computerScore: ${computerScore}     `;
}
 function restart() {
  playerScore = 0;
  computerScore = 0;
  let outcomeDiv = document.querySelector(".outcome");
  outcomeDiv.innerHTML = "";
}

const scoreUpdate = (playerScore, computerScore) => {
  if (playerScore == 5 || computerScore == 5) {
    const outcomeDiv = document.querySelector(".outcome");
    const h2 = document.createElement("h2");
    h2.innerText = "";
    outcomeDiv.appendChild(h2);
    if (playerScore < computerScore) {
      h2.innerText = "sorry you lost! & please click on reset  button to play again";
      outcomeDiv.appendChild(h2);
    }
    restart();
    return ;
  }
};
const resetButton = document.querySelector(".reset");
  resetButton.addEventListener('click',function(event) {
  restart();
  playRound();
})

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

playRound();
