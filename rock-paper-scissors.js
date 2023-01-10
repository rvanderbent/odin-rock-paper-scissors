
let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;

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

// get user input
    // prompt user
    // remember case sensitivity
    // catch inappropriate input


function checkChoiceValidity(option) {
    if (option != "rock" && option != "paper" && option != "scissors") {
        return "Please enter a valid option";
    }
    return;
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

// display result
function declareWinner(winner, loser) {
    playerScore++;
    winner = winner.slice(0,1).toUpperCase() + winner.slice(1);
    return "You win! " + winner + " beats " + loser;
}

function declareLoser(loser, winner) {
    computerScore++;
    winner = winner.slice(0,1).toUpperCase() + winner.slice(1);
    return "You lose! " + winner + " beats " + loser;
}



// play 5 rounds
function game(){
    for (let i=1; i < 6; i++){
        console.log("Round " + i);
        playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        console.log(checkChoiceValidity(playerSelection));
        console.log("You played " + playerSelection);

        computerSelection = getComputerChoice();
        console.log("The computer played " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);
    }
    if (playerScore > computerScore) {
        return ("Congratulations! You beat the computer")
    }
    else return "Sorry, the computer won this game. Better luck next time";
}

console.log(game());


