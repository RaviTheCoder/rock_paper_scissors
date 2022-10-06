console.log("Hello World");

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

let playerChoice = "rock";

// playRound(playerSelection, computerSelection) 
// using if else - find out who wins
// returns a string declaring round winner

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result = "draw";
        } else if (computerSelection == "paper") {
            result = "player lose";
        } else { 
            result = "player win";
        }
        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        // console.log(result);
        return result;
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "player win";
        } else if (computerSelection == "paper") {
            result = "draw";
        } else { 
            result = "player lose";
        }
        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        // console.log(result);
        return result;
    } else {
        if (computerSelection == "rock") {
            result = "player lose";
        } else if (computerSelection == "paper") {
            result = "player win";
        } else { 
            result = "draw";
        }
        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        // console.log(result);
        return result;
    }
}

console.log(playRound(playerChoice, getComputerChoice()));

// game() - plays five rounds
// keeps score
// declares overall winner