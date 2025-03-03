# js-rock-paper-scissors
A Rock Paper Scissors game to be payed entirely within the Google Chrome Developer Tools console (and later to have a GUI).

# Project: Rock Paper Scissors
This is the first JavaScript project that has been built from scratch. Because the project is being started from a blank slate,
it was important to start by utilizing essential problem solving skills programmers use.
First, I started to plan my solution. I decides to highlight the main 'wireframe' of code the project's program will need, like
a function to get the player's 'rock paper scissors' choice, a function to get the computer's 'rock paper scissors' choice, and additional
functions the project needs. By disregarding code specifics at this point, I am able to get a 'diagram' of how the program will work, and
which parts are connected together.
Secondly, after I understood what variables, functions, and logic pieces I need, I wrote pseudocode to describe distinct steps I want my
program to take, to understand how to translate my exact desires into JavaScript code. This then gave me an optional checklist, or if I had parts of the program not working as intended, I could point to my pseudocode to see what works, what does not work, and what does not work as intended. This also allows me to implement additional code to functions, and know exactly where to add it to places in the code.
Lastly, I would test each code section, such as a specific function, seperately to ensure the code works as desired. If I had two functions that work correctly, but then do not work correctly when implemented into the bigger picture, I could pinpoint where the code logic goes wrong. 

# Logic Sections

function to get the user's choice, getHumanChoice():
    The human choice is received from a prompt, which allows the user to input a case-insensitive, plural-insensitive input of 'rock', 'paper', or 'scissors', or their singlular-letter shorthand 'r', 'p', or 's'. If the user does not provide a valid input, they will be continuously asked to until a valid input is entered. Conditional if-else statements and switch-case statements are used to determine valid inputs, or to collect similar inputs to the same variable. Returns the variable 'humanInput', which is the choice selected 'rock', 'paper', or 'scissors'.

function to get the computer's choice, getComputerChoice():
    The computer choice is received at random, generating a random number which correlates to one of the three inputs. Returns the choice 'rock', 'paper', or 'scissors'.

function to play a round, playRound():
    Playing a round takes the parameters of the human's choice and the computer's choice. These parameters are function references 'getHumanChoice' and 'getComputerChoice', and not function calls. This avoids invoking these functions until a round is played, to where each respective choice is acquired only once. The function calls are stored in constants, to which the 'humanChoice' is compared to the 'computerChoice', and based on the two choices certain logic is executed. If both choices are the same, there is a tie and playRound() is recursively called for new choices. If the user wins, the choices are displayed by saying you won the round, and the 'humanScore' variable is incremented. If the computer wins, the choices are displayed by saying you lost the round, and the 'computerScore' variable is incremented. The function will eventually end with an empty return.

function to play a game, playGame():
    Playing a game invokes the playRound() function repeatedly, until the either the user or computer's score reaches 5. Once a score reaches 5, there is logic to display that you won the game if the 'humanScore' is 5, or you lost the game if the 'computerScore' is 5. The function then asks if you would like to play again ('yes'/'no') via a prompt of the playAgain() function. The function eventually returns your choice to play again.

function to play a subsequent game, playAgain():
    Asks if you would like to play again via a 'yes'/'no' prompt. If you do decide to play again, the scores are reset and the game is played again. If you do not decide to play again, a message is displayed thanking you for playing. The funciton will return your choice to play again.


