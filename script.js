
let playerscore = 0;
let computerscore = 0;

function computerPlay() {
    let opt = randomIntFromInterval(1, 3);
    if (opt==0) {
        return "rock";
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // rock
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return playerSelection + " beats " + computerSelection + " player wins"
    }
    if (playerSelection == "rock" && computerSelection == "rock") {
        return playerSelection + " tie " + computerSelection + " noone wins"
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        return playerSelection + " loses to " + computerSelection + " computer wins"
    }
    //paper
    if (playerSelection == "paper" && computerSelection == "rock") {
        return playerSelection + " beats " + computerSelection + " player wins"
    }
    if (playerSelection == "paper" && computerSelection == "paper") {
        return playerSelection + " tie " + computerSelection + " noone wins"
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        return playerSelection + " loses to " + computerSelection + " computer wins"
    }
    //scissors
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerSelection + " beats " + computerSelection + " player wins"
    }
    if (playerSelection == "scissors" && computerSelection == "scissor") {
        return playerSelection + " tie " + computerSelection + " noone wins"
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return playerSelection + " loses to " + computerSelection + " computer wins"
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        let sign = prompt("enter sign: ", "rock");
        let util = playRound(sign, computerPlay());
        console.log(util);
        if (util.includes("player")) {
            playerscore++;
        }
        if (util.includes("computer")) {
            computerscore++;
        }
    }
    console.log("player: " + playerscore + ", computer: " + computerscore);
    if (playerscore > computerscore) {
        console.log("player wins");
    } else {
        console.log("computer wins");
    }
}