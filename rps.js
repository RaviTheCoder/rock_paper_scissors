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
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            robotScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        } else { 
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            humanScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        }

    } else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            humanScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            ties += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        } else {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            robotScore += 1;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        }

    } else {

        if (computerSelection == "rock") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        } else if (computerSelection == "paper") {
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        } else { 
            comment.innerText = `Player ${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()} Computer`;
            scorecard.innerText = `Player ${humanScore} : ${robotScore} Computer and ${ties} draws`
        }
    }
}










// playRound(playerSelection, computerSelection) 
// using nested if else - find out who wins
// returns a string declaring round winner

// function playRound(playerSelection, computerSelection) {

//     if (playerSelection == "rock") {
//         if (computerSelection == "rock") {
//             result = "      A draw? boring      ";
//         } else if (computerSelection == "paper") {
//             result = "      NOOOO :(       ";
//         } else { 
//             result = "      YAAAY! :D       ";
//         }

//         status.innerText = `Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`;

//         // console.log(`Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`);
//         return result;
//     } else if (playerSelection == "paper") {
//         if (computerSelection == "rock") {
//             result = "      YAAAY! :D       ";
//         } else if (computerSelection == "paper") {
//             result = "      A draw? boring      ";
//         } else { 
//             result = "      NOOOO :(       ";
//         }

//         status.innerText = `Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`;

//         // console.log(`Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`);
//         return result;
//     } else {
//         if (computerSelection == "rock") {
//             result = "      NOOOO :(       ";
//         } else if (computerSelection == "paper") {
//             result = "      YAAAY! :D       ";
//         } else { 
//             result = "      A draw? boring      ";
//         }
        
//         status.innerText = `Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`;

//         // console.log(`Player ${playerSelection.toUpperCase()} : ${computerSelection.toUpperCase()} Computer`);
//         return result;
//     }
// }


// get player choice
// make player choice case insensitive

// let getPlayerChoice = () => prompt("Rock, Paper or Scissors?").toLowerCase();

// validate player choice
// take getPlayerChoice - test against correct selections
// if correct, send to game()
// if incorrect, send another prompt

// function validatePlayerChoice(playerSelection) {
//     if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
//         alert("Please type in rock, paper, or scissors with correct spelling.")
//         return validatePlayerChoice(getPlayerChoice());
//     } else {
//         return playerSelection;
//     }

// }

// game() - plays five rounds
// keeps scorefor (let i = 0; i < 5; i++) 
// declares overall winner

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`      ---  ROUND ${i + 1}  ---`);
        result = playRound(validatePlayerChoice(getPlayerChoice()), getComputerChoice());

        if (result == "      YAAAY! :D       ") {
            playerScore += 1;
        } else if (result == "      NOOOO :(       ") {
            computerScore += 1;
        } else {
            draws += 1;
        }

        console.log(result);
        console.log(`Player ${playerScore} : ${computerScore} Computer   and   ${draws} draws`)
    }

    if (playerScore == computerScore) {
        console.log("It was a draw!?!?");
    } else if (playerScore > computerScore) {
        console.log("Humanity prevails!");
    } else {
        console.log("Frick - the robots won :/");
    }
}

// game();


