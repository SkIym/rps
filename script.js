
// Create a function to get the computer's choie
function getComputerChoice() {

    // Create array of choices 
    const choices = ["rock","paper","scissors"]

    // Create a variable to store randomized array index
    let computerSelection = Math.floor(Math.random()*choices.length);

    // Return a string that corresponds to the array index
    return choices[computerSelection];
}

// Create a function to get player's input
function getPlayerChoice() {

    let playerSelection = prompt("Type your choice:", "Rock, Paper, or Scissors?");
    return playerSelection.toLowerCase();

}

// Play a single round of the game
function playGame(player, comp) {

    // Compare player and computer selections
    if ((player == "rock" && comp == "scissors") || (player == "paper" && comp == "rock") || (player =="scissors" && comp == "paper")) {
        playerPoints += 1;
        return `You win, ${player} beats ${comp}`;
    }
    else if (player == comp) {
        return "Draw";
    }
    else {
        computerPoints += 1;
        return `You lose, ${comp} beats ${player}`;
    }
        
}

// Play the game n amount of times
function game(n) {
    for (let i=0; i < n; i++) {
        console.log(playGame(getPlayerChoice(),getComputerChoice()))
    }
    console.log(winner(playerPoints, computerPoints))
}

// Determine the winner
function winner(player, comp) {
    if (player == comp) return "Winner: Draw";
    else if (player > comp) return "Winner: Player";
    else return "Winner: Computer"
}

let playerPoints = 0;
let computerPoints = 0;

// Calls the game function with a prompt as the argument
game(Number(prompt("Number of Rounds:")))