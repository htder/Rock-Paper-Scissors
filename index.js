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

// play() - takes the users guess (playerSelection) and the computers guess (computerSelection) and returns who has won e.g. "You Lose! Paper beats Rock".
function play(playerSelection, computerSelection) {
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

// game() - plays five rounds of rock paper scissors, keeping score of who has won each round, then reports a winner or loser at the end.

function game() {
  // initialise score variables
  let playerScore = 0;
  let computerScore = 0;

  // start loop
  for (let i = 0; i < 5; i++) {
    // get user input and computer input
    let userInput = userPlay();
    let computerInput = computerPlay();
    // print winner
    let userWinner = play(userInput, computerInput);
    if (userWinner) {
      console.log(`You Win! ${userInput} beats ${computerInput}`);
    } else {
      console.log(`You Lose! ${computerInput} beats ${userInput}`);
    }
    // change score variables
    userWinner === true ? playerScore++ : computerScore++;
  }
  console.log(playerScore, computerScore);

  // print who has won the game
  if (playerScore > computerScore) {
    console.log(
      `You beat the computer! Score [${playerScore} : ${computerScore}]`
    );
  } else {
    console.log(
      `The computer beat you! Score [${playerScore} : ${computerScore}]`
    );
  }
}

game();
