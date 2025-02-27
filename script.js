/* JavaScript file for Rock Paper Scissors Project */

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1; // random chance of '1', '2', or '3'

    // Computer's Random Selection of Choice
    switch (randomChoice) {
        case 1: // Rock
            return 'rock';
        case 2: // Paper
            return 'paper';
        case 3: // Scissors
            return 'scissors';
        default:
            console.error("Could not return a valid choice."); // Default Error Handler
            return getComputerChoice(); // Recursive function call
    }
}

function getHumanChoice() {
    // Human Input from prompt
    let humanInput;
    humanInput = prompt("Play 'Rock, Paper, Scissors!' Please select an option:");

    if (humanInput !== null) {
        humanInput = humanInput.trim().toLowerCase();
    }

    // Shorthand Single-Letter Inputs & Plurality Differences
    if (humanInput === ('r' || 'rocks')) {
        humanInput = 'rock';
    } else if (humanInput === ('p' || 'papers')) {
        humanInput = 'paper';
    } else if (humanInput === ('s' || 'scissor')) {
        humanInput = 'scissors';
    }

    // Return the Human Choice in a similar syntax
    switch (humanInput) {
        case null:
            return console.error("Human Choice is null."); // Error if user cancels prompt, may change to recursive function call
        case 'rock':
        case 'paper':
        case 'scissors':
            return humanInput; // Valid humanInput
        default:
            console.log("Invalid choice entered. Please select a valid option of 'Rock', 'Paper, or 'Scissors':");
            return getHumanChoice(); // Recursive function call - if invalid humanInput
    }
}

function playRound(humanChoice, computerChoice) {
    return;
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playGame() {
    return;
}