
let computerSelection = "";
let playerSelection = "";

// generate random choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2){
        return "Paper"
    }
    else return "Scissors";
}

console.log(getComputerChoice());
computerSelection = getComputerChoice();


// get user input
    // prompt user
    // remember case sensitivity
    // catch inappropriate input
// check if user input beats computer choice
// display result
// keep user score
// keep computer score
// play 5 rounds
// compare scores
// display winner or loser

