
let computerSelection = "";
let playerSelection = "";

// generate random choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2){
        return "paper"
    }
    else return "scissors";
}

//console.log(getComputerChoice());
computerSelection = getComputerChoice();


// get user input
    // prompt user
    // remember case sensitivity
    // catch inappropriate input

playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
console.log(playerSelection);

function checkChoiceValidity(option) {
    if (option != "rock" && option != "paper" && option != "scissors") {
        return "Please enter a valid option";
    }
    return "Great!";
}

console.log(checkChoiceValidity(playerSelection));

// check if user input beats computer choice

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return declareWinner(playerSelection, computerSelection);
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return declareLoser(playerSelection, computerSelection);
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return declareWinner(playerSelection, computerSelection);
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return declareLoser(playerSelection, computerSelection);
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return declareWinner(playerSelection, computerSelection);
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return declareLoser(playerSelection, computerSelection);
    }
    return "Oops, something went wrong";
}

function declareWinner(winner, loser) {
    winner = winner.slice(0,1).toUpperCase() + winner.slice(1);
    return "You win! " + winner + " beats " + loser;
}

function declareLoser(loser, winner) {
    winner = winner.slice(0,1).toUpperCase() + winner.slice(1);
    return "You lose! " + winner + " beats " + loser;
}

console.log(playRound(playerSelection, computerSelection));

// display result
// keep user score
// keep computer score
// play 5 rounds
// compare scores
// display winner or loser

