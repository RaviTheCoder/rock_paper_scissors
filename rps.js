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

console.log(getComputerChoice());

// playRound(playerSelection, computerSelection) 
// using if else - find out who wins
// returns a string declaring round winner

// get player choice
// make player choice case insensitive

// game() - plays five rounds
// keeps score
// declares overall winner