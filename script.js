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

function playRound(getHumanChoice, getComputerChoice) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    // Computer Choice is ROCK
    if (computerChoice === 'rock') {
        switch (humanChoice) {
            case 'rock': // Tie Logic
                console.log("TIE! Both picked 'rock'. Please select again.")
                return playRound(getHumanChoice, getComputerChoice); // Recursive function call - to get new choices
                break;
            case 'paper': // Win Logic
                console.log(`You Win! Your choice '${humanChoice}' beats the computer choice '${computerChoice}'.`)
                humanScore++;
                break;
            case 'scissors': // Lose Logic
                console.log(`You Lose. Your choice '${humanChoice}' lost to the computer choice '${computerChoice}'.`)
                computerScore++;
                break;
            default:
                // logic
        }
    }

    // Computer Choice is PAPER
    if (computerChoice === 'paper') {
        switch (humanChoice) {
            case 'rock': // Lose Logic
                console.log(`You Lose. Your choice '${humanChoice}' lost to the computer choice '${computerChoice}'.`)
                computerScore++;
                break;
            case 'paper': // Tie Logic
                console.log("TIE! Both picked 'paper'. Please select again.")
                return playRound(getHumanChoice, getComputerChoice); // Recursive function call - to get new choices
                break;
            case 'scissors': // Win Logic
                console.log(`You Win! Your choice '${humanChoice}' beats the computer choice '${computerChoice}'.`)
                humanScore++;
                break;
            default:
                // logic
        }
    }

    // Computer Choice is SCISSORS
    if (computerChoice === 'scissors') {
        switch (humanChoice) {
            case 'rock': // Win Logic
                console.log(`You Win! Your choice '${humanChoice}' beats the computer choice '${computerChoice}'.`)
                humanScore++;
                break;
            case 'paper': // Lose Logic
                console.log(`You Lose. Your choice '${humanChoice}' lost to the computer choice '${computerChoice}'.`)
                computerScore++;
                break;
            case 'scissors': // Tie Logic
                console.log("TIE! Both picked 'scissors'. Please select again.")
                return playRound(getHumanChoice, getComputerChoice); // Recursive function call - to get new choices
                break;
            default:
                // logic
        }
    }
    /* Debug */// console.log(winOrLose);
    return;
}


let winOrLose; // Variable return to determine human win or lose
let computerScore = 0;
let humanScore = 0;

// playRound(humanChoice, computerChoice);
// playGame();

function playGame() {
    
    playRound(getHumanChoice, getComputerChoice)

    if (humanScore >= 5) {
        console.log(`Congratulations! You win the game! The score was ${humanScore} to ${computerScore}.`);
        return playAgain();
    } else if (computerScore >= 5) {
        console.log(`Tough Luck! You lost. The score was ${humanScore} to ${computerScore}.`);
        return playAgain();
    } else {
        return playGame();
    }
}

function playAgain() {
    let playAgainChoice;
    playAgainChoice = prompt("Woud you like to play again? ('yes'/'no')")

    if (playAgainChoice !== null) {
        playAgainChoice = playAgainChoice.trim().toLowerCase();
    }

    if (playAgainChoice === 'yes') {
        humanScore = 0;
        computerScore = 0;
        return playGame();
    } else if (playAgainChoice === 'no') {
        return console.log("Thanks for Playing! Refresh the webpage if you would like to play again!");
    } else {
        console.log("Unknown input. Please type 'yes' or 'no' if you would like to play again.");
        return playAgain();
    }
}

playGame();