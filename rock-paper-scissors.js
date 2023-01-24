
let computerSelection = "";
let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let round = 1;
const options = document.querySelectorAll("button.option");
const result = document.querySelector("div#result");



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

function keepScore(){
    if (playerScore >= 5){
        again.style.display = "";
        options.forEach(button => button.style.display = "none")
        return "Congratulations! You beat the computer";
    }
    else if (computerScore >= 5){
        again.style.display = "";
        options.forEach(button => button.style.display = "none")
        return "Sorry, the computer won this game. Better luck next time";
    }
    else return "";
}


options.forEach(button => button.addEventListener("click", function (){
    result.innerHTML = "";
    result.innerHTML = `<br><h3>Round ${round}</h3>`;
    round ++;
    let computerSelection = getComputerChoice();
    result.innerHTML += `<br>You played ${button.id} `;
    result.innerHTML += `<br>The computer played ${computerSelection}`;
    result.innerHTML += "<br>" + playRound(button.id, computerSelection);
    result.innerHTML += `<br><br>You: ${playerScore}`;
    result.innerHTML += `<br>Computer: ${computerScore}`;
    result.innerHTML += "<br><br>" + keepScore();
}));

const again = document.querySelector(".again");
again.addEventListener("click", resetGame);

function resetGame(){
    result.innerHTML = "";
    round = 1;
    playerScore = 0;
    computerScore = 0;
    options.forEach(button => button.style.display = "")
    again.style.display = "none";
};