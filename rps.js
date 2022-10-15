// Select buttons, and link them to playRound();

let rockBTN = document.querySelector('#rock');
let paperBTN = document.querySelector('#paper');
let scissorsBTN = document.querySelector('#scissors');

let humanScore = 0;
let robotScore = 0;
let ties = 0;

rockBTN.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

paperBTN.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

scissorsBTN.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

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


// display each round on page
let resultDiv = document.querySelector('#results');

let comment = document.createElement('p');
comment.innerText = "I wonder who'll win?";
resultDiv.appendChild(comment);

let scorecard = document.createElement('p');
scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
resultDiv.appendChild(scorecard);


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            ties += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            robotScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
        } else { 
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            humanScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
        }

    } else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            humanScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            ties += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
        } else {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            robotScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
        }

    } else {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
            robotScore += 1;
        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
            humanScore += 1;
        } else { 
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
            ties =+ 1;
        }
    }

    checkWinner();
}

// display result on page

let winner = document.createElement('p');
resultDiv.appendChild(winner);

function checkWinner() {
    if (humanScore == 5) {
        winner.innerText = "yay you go human";
    } else if (robotScore == 5) {
        winner.innerText = "nooo poor humanity";
    }
}
