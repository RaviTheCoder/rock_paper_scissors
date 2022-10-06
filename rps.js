// getComputerChoice() will return either r, p or s

function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        result = "rock";
    } else if (num == 2) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return result;
}

// get player choice
// make player choice case insensitive

function getPlayerChoice() {
    textChoice = prompt("Wanna play a game? Rock, Paper or Scissors?");
    return textChoice.toLowerCase();
}

// playRound(playerSelection, computerSelection) 
// using nested if else - find out who wins
// returns a string declaring round winner

function playRound(playerSelection, computerSelection) {
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return "Please choose rock, paper or scissors";
    } else if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "DRAW";
        } else if (computerSelection == "paper") {
            result = "NOOOO :(";
        } else { 
            result = "Yay :D";
        }
        console.log(`Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`);
        return result;
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "Yay :D";
        } else if (computerSelection == "paper") {
            result = "DRAW";
        } else { 
            result = "NOOOO :(";
        }
        console.log(`Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`);
        return result;
    } else {
        if (computerSelection == "rock") {
            result = "NOOOO :(";
        } else if (computerSelection == "paper") {
            result = "Yay :D";
        } else { 
            result = "DRAW";
        }
        console.log(`Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`);
        return result;
    }
}

// console.log(playRound(getPlayerChoice(), getComputerChoice()));

// game() - plays five rounds
// keeps score
// declares overall winner

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        result = playRound(getPlayerChoice(), getComputerChoice());

        if (result == "Yay :D") {
            playerScore = playerScore + 1;
        } else if (result == "NOOOO :(") {
            computerScore = computerScore + 1;
        }

        console.log(result);
        console.log(`Player ${playerScore} : ${computerScore} Computer`)
    }

    if (playerScore == computerScore) {
        console.log("It was a draw!");
    } else if (playerScore > computerScore) {
        console.log("Humanity prevails!");
    } else {
        console.log("Frick - the robots won :/");
    }
}

game();