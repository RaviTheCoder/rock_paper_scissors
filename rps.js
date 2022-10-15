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
    switch (num) {
        case 1:
            return "rock";
        case 2: 
            return "paper";
        case 3:
            return "scissors";
    }
}


// display each round on page
let resultDiv = document.querySelector('#results');

let comment = document.createElement('p');
comment.innerText = "I wonder who'll win?";
resultDiv.appendChild(comment);

let scorecard = document.createElement('p');
updateScorecard();
resultDiv.appendChild(scorecard);


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("draw");

        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("loss");

        } else { 
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("win");
        }

    } else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("win");

        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("draw");

        } else {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("loss");
        }

    } else {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("loss");
        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("win");
        } else { 
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            updateScore("draw");
        }
    }
    updateScorecard();
    checkWinner();
}


function updateScore(victor) {
    switch (victor) {
        case "win":
            humanScore += 1;
            break;
        case "loss":
            robotScore += 1;
            break;
        case "draw":
            ties += 1;
            break;
    }
}

function updateScorecard() {
    scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`;
}

// display result on page

let winner = document.createElement('p');
resultDiv.appendChild(winner);

function checkWinner() {
    if (humanScore == 5) {
        winner.innerText = "yay you go human";
        endScreen();
    } else if (robotScore == 5) {
        winner.innerText = "nooo poor humanity";
        endScreen();
    }
}


function endScreen() {
    buttons.removeChild(rockBTN);
    buttons.removeChild(paperBTN);
    buttons.removeChild(scissorsBTN);
    let restart = document.createElement('button');
    restart.innerText = "restart?";
    resultDiv.appendChild(restart);
    restart.addEventListener('click', refreshPage);
}

const refreshPage = () => {
    location.reload();
}
  

