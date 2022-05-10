//getting necessary nodes
const images = Array.from(document.querySelectorAll('.card-image'));
const message = document.querySelector('.message');
const scorePlayer = document.querySelector('.player-score');
const scoreComputer = document.querySelector('.computer-score');
const selectionPlayer = document.querySelector('.player-selection');
const selectionComputer = document.querySelector('.computer-selection');

let playerScore = 0;
let computerScore = 0;

// Start Game when user clicks on an image
images.forEach((image) =>
    image.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5) {
            return;
        }
        game(image.dataset.image);
    })
);

/* Game Logic */

function getComputerSelection() {
    let opt = randomIntFromInterval(1, 3);
    let computerSelection = "";
    if (opt == 1) {
        computerSelection = "Rock";
    }
    if (opt == 2) {
        computerSelection = "Paper";
    }
    if (opt == 3) {
        computerSelection = "Scissors";
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let log = "";

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            log = "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            log = "You Win! Rock beats Scissors";
        } else {
            log = "It's a tie";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            log = "You Lose! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            log = "You Win! Paper beats Rock";
        } else {
            log = "It's a tie";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            log = "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            log = "You Win! Scissors beats Paper";
        } else {
            log = "It's a tie";
        }
    }

    return log;
}

function createParagWithText(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function game(playerSelection) {
    playerSelection = capitalize(playerSelection);
    let computerSelection = getComputerSelection();
    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("Win")) {
        playerScore++;
    }
    if (roundResult.includes("Lose")) {
        computerScore++;
    }

    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    message.textContent = roundResult;
    selectionPlayer.appendChild(createParagWithText(playerSelection));
    selectionComputer.appendChild(createParagWithText(computerSelection));


    if (playerScore >= 5) {
        message.textContent = "Game Over. You Win!";
    }
    if (computerScore >= 5) {
        message.textContent = "Game Over. You Lose!";
    }
}

//utils
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function capitalize(string) {
    return (
        string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
}
