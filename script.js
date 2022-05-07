const myArray = ["rock", "paper", "scissors"];

function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // rock
    if (playerSelection  == "rock" && computerSelection  == "scissors") {
        return playerSelection + " beats " + computerSelection + " player wins"
    }
    if (playerSelection  == "rock" && computerSelection  == "rock") {
        return playerSelection + " tie " + computerSelection + " noone wins"
    }
    if (playerSelection  == "rock" && computerSelection  == "paper") {
        return playerSelection + " loses to " + computerSelection + " computer wins"
    }
    //paper
    if (playerSelection  == "paper" && computerSelection  == "rock") {
        return playerSelection + " beats " + computerSelection + " player wins"
    }
    if (playerSelection  == "paper" && computerSelection  == "paper") {
        return playerSelection + " tie " + computerSelection + " noone wins"
    }
    if (playerSelection  == "paper" && computerSelection  == "scissors") {
        return playerSelection + " loses to " + computerSelection + " computer wins"
    }
    //scissors
    if (playerSelection  == "scissors" && computerSelection  == "paper") {
        return playerSelection + " beats " + computerSelection + " player wins"
    }
    if (playerSelection  == "scissors" && computerSelection  == "scissor") {
        return playerSelection + " tie " + computerSelection + " noone wins"
    }
    if (playerSelection  == "scissors" && computerSelection  == "rock") {
        return playerSelection + " loses to " + computerSelection + " computer wins"
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));