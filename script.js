/* JavaScript file for Rock Paper Scissors Project */

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    switch (randomChoice) {
        case 1: // Rock
            return 'rock';
            break;
        case 2: // Paper
            return 'paper';
            break;
        case 3: // Scissors
            return 'scissors';
            break;
        default:
            console.error("Could not return a valid choice.");
    }
    return;
}

function getHumanChoice() {
    if (humanInput === null) {
        return console.error("Human Choice is null.");
    } else if (humanInput.toLocaleLowerCase() == 'rock' || 'rocks') {
        humanInput = 'rock';
    } else if (humanInput.toLocaleLowerCase() == 'paper' || 'papers') {
        humanInput = 'paper';
    } else if (humanInput.toLocaleLowerCase() == 'scissors' || 'scissor') {
        humanInput = 'scissors';
    } else {
        humanInput = 'unknown';
    }
/* Debug */ console.log(humanInput);
    switch (humanInput) {
        case null:
            return console.error("Human Choice is null.");
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
        default:
            console.warn('no correct human choice was inputted');
    }

    return humanInput;
}

function playRound(humanChoice, computerChoice) {
    return;
}

let humanInput = prompt("Play 'Rock, Paper, Scissors!' Please select an option:");
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playGame() {
    return;
}