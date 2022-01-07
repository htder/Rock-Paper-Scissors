const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const choices = document.querySelectorAll(".button");
const goButton = document.querySelector(".start");
const computer = document.querySelector(".computer-choice-container p");
const result = document.querySelector(".result");
const buttonContainer = document.querySelector(".start-container");
const resultContainer = document.querySelector(".result-container");
const againContainer = document.querySelector(".again-container");
const instructionContainer = document.querySelector(".instruction");

const score = {
  you: 0,
  computer: 0,
};

againContainer.addEventListener("click", function (e) {
  buttonContainer.appendChild(goButton);
  instructionContainer.setAttribute("style", "display: flex");
  resultContainer.setAttribute("style", "display: none;");
  againContainer.setAttribute("style", "display: none;");
  score.you = 0;
  score.computer = 0;
  playerScore.textContent = score.you;
  computerScore.textContent = score.computer;
});

choices.forEach((button) =>
  button.addEventListener("click", function (e) {
    choices.forEach((button) => button.classList.remove("chosen"));
    e.target.classList.add("chosen");
  })
);

goButton.addEventListener("click", function (e) {
  const userChoiceArr = Array.from(choices).filter((button) =>
    button.classList.contains("chosen")
  );
  if (userChoiceArr[0] === undefined) return;
  const userChoice = userChoiceArr[0].textContent;
  const computerChoice = computerPlay();
  const hasUserWon = winner(userChoice, computerChoice);
  computer.textContent = `The computer chose: ${computerChoice}`;

  if (hasUserWon) {
    playerScore.textContent = ++score.you;
  } else {
    computerScore.textContent = ++score.computer;
  }
  choices.forEach((button) => button.classList.remove("chosen"));
  if (score.you === 5 || score.computer === 5) {
    const resultString = score.you === 5 ? "WINNER!" : "You Lost!";
    result.textContent = resultString;
    resultContainer.setAttribute("style", "display: flex;");
    againContainer.setAttribute("style", "display: flex;");
    resultContainer.classList.add("result-container-show");
    goButton.remove();
    instructionContainer.setAttribute("style", "display: none");
  }
});

// computerPlay() - randomly return either "rock", "paper" or "scissors".
function computerPlay() {
  // initialise array of choices
  const choices = ["Rock", "Paper", "Scissors"];
  // randomly pick a number between 0 and 2
  const index = Math.trunc(Math.random() * 3);
  // return the string with the index of the random number
  return choices[index];
}

// userPlay() - returns sanatized input of the user input;
function userPlay() {
  // get user input
  const input = prompt("Rock, Paper, Scissors?");
  // lowercase user input
  const lowerInput = input.toLowerCase();
  // capatilize and return user input
  return lowerInput.replace(lowerInput[0], lowerInput[0].toUpperCase());
}

// play() - takes the users guess (playerSelection) and the computers guess (computerSelection) and returns who has won. True for player winning or drawing and false for player losing.
function winner(playerSelection, computerSelection) {
  // Paper beats rock
  // Rock beats scissors
  // Scissors beats paper

  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return true;
    } else if (computerSelection === "Scissors") {
      return false;
    } else {
      return true;
    }
  }

  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return true;
    } else if (computerSelection === "Paper") {
      return false;
    } else {
      return true;
    }
  }
  if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      return true;
    } else if (computerSelection === "Rock") {
      return false;
    } else {
      return true;
    }
  }
}
