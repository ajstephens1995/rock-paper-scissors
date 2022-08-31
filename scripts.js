

function getComputerSelection() {
  let a = Math.random()
  if (a <= 1 / 3) {
    return "rock"
  } else if (a > 1 / 3 && a <= 2 / 3) {
    return "paper"
  } else return "scissors"
}

function fairnessTest() {
  let rockCount = 0
  let paperCount = 0
  let scissorCount = 0
  for (let i = 0; i < 100; i++) {
    let testRun = getComputerSelection()
    if (testRun === "rock") {
      rockCount++;
    } else if (testRun === "paper") {
      paperCount++;
    } else scissorCount++
  }
  console.log("rock " + rockCount);
  console.log("paper " + paperCount);
  console.log("scissors " + scissorCount);
}

function playRound(playerChoice, computerChoice) {
  /*console.log("player chose " + playerChoice)
  console.log("computer chose " + computerChoice)*/
  if (playerChoice.toLowerCase() === "rock") {
    switch (true) {
      case (computerChoice === "rock"):
        return "You tied.";
        break;
      case (computerChoice === "paper"):
        return "You lose! Paper beats rock.";
        break;
      case (computerChoice === "scissors"):
        return "You win! Rock beats scissors.";
        break;
    }
  }
  if (playerChoice.toLowerCase() === "paper") {
    switch (true) {
      case (computerChoice === "rock"):
        return "You win! Paper beats rock.";
        break;
      case (computerChoice === "paper"):
        return "You tied.";
        break;
      case (computerChoice === "scissors"):
        return "You lose! Scissors beats paper."
        break;
    }
  }
  if (playerChoice.toLowerCase() === "scissors") {
    switch (true) {
      case (computerChoice === "rock"):
        return "You lose. Rock beats scissors.";
        break;
      case (computerChoice === "paper"):
        return "You win! Scissors beat paper.";
        break;
      case (computerChoice === "scissors"):
        return "You tied.";
        break;
    }
  }
  else { return "That's not a valid option." }
}

function bestOf(numOfGames) {
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;
  for (let i = 0; i < numOfGames;) {
    let playerSelection = prompt("Choose rock, paper, or scissors.")
    let computerSelection = getComputerSelection()
    let outcome = playRound(playerSelection, computerSelection)

    if (outcome.includes("win")) {
      playerScore++;
      i++;
    }
    if (outcome.includes("lose")) {
      computerScore++;
      i++;
    }
    if (outcome.includes("tied")) {
      ties++
    }
  }
  console.log("player wins: " + playerScore);
  console.log("computer wins: " + computerScore);
  console.log("ties: " + ties);
}

function startGame() {
  let numOfGames = prompt("Play best of ___")
  console.log("Playing best of " + numOfGames)
  bestOf(numOfGames)
}