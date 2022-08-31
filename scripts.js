
const startButton = document.querySelector(".startGame");
const startFairnessTest = document.querySelector(".startFairnessTest");
let bestOfInput = document.getElementById("bestOf").value

startButton.addEventListener("click", startGame);
startFairnessTest.addEventListener("click", function() {
  fairnessTest(100);
})

function getComputerSelection() {
  let a = Math.random()
  if (a <= 1 / 3) {
    return "rock"
  } else if (a > 1 / 3 && a <= 2 / 3) {
    return "paper"
  } else return "scissors"
}

function fairnessTest(num) {
  let rockCount = 0
  let paperCount = 0
  let scissorCount = 0
  const showFairnessTestResults = document.querySelector("p.fairnessTestOutcome")
  for (let i = 0; i < num; i++) {
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
  showFairnessTestResults.innerHTML = `rock: ${rockCount} | paper: ${paperCount} | scissors: ${scissorCount}`;
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
  const showPlayerScore = document.getElementById("playerScore")
  const showComputerScore = document.getElementById("computerScore")
  const showTies = document.getElementById("ties")
  const showWinOrLose = document.getElementById("winOrLose")
  
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
  showPlayerScore.innerHTML = `Player Score: ${playerScore}`
  showComputerScore.innerHTML = `Computer Score: ${computerScore}`
  showTies.innerHTML = `Ties: ${ties}`
  console.log("player wins: " + playerScore);
  console.log("computer wins: " + computerScore);
  console.log("ties: " + ties);
  showWinOrLose.innerHTML = winLoseTie(playerScore, computerScore)
}

function startGame() {
  let bestOfInput = document.getElementById("bestOf").value
  /*let numOfGames = prompt("Play best of ___")*/
  if (bestOfInput <= 50 && bestOfInput >= 1) {
    console.log("Playing best of " + bestOfInput)
    bestOf(bestOfInput)
  } else console.log("This is not a valid input")
}

function winLoseTie(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "You win!"
  } else if (computerScore > playerScore) {
    return "You lose... :("
  } else return "You tied."
}