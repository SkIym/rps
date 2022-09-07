
// Create a function to get the computer's choie
function getComputerChoice() {

    // Create array of choices 
    const choices = ["rock","paper","scissors"]

    // Create a variable to store randomized array index
    let computerSelection = Math.floor(Math.random()*choices.length);

    // Return a string that corresponds to the array index
    return choices[computerSelection];
}

// Play a single round of the game
function playGame(playerSelection, computerSelection) {

    // Compare player and computer selections
    
}

// Declare player selection
const playerSelection = "rock";

// Calls the playGame() function with arguments
console.log(playGame(playerSelection,getComputerChoice()))