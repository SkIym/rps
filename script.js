
// Create a function to get the computer's choie
function getComputerChoice() {

    // Create array of choices 
    const choices = ["rock","paper","scissors"]

    // Create a variable to store randomized array index
    let computerSelection = Math.floor(Math.random()*choices.length);

    // Return a string that corresponds to the array index
    return choices[computerSelection];
};

// Create a function to get player's input
function getPlayerChoice() {

    let playerSelection = prompt("Type your choice:", "Rock, Paper, or Scissors?");
    return playerSelection.toLowerCase();

};

// Play a single round of the game
function playGame(player, comp) {

    // Compare player and computer selections
    if ((player == "rock" && comp == "scissors") || (player == "paper" && comp == "rock") || (player =="scissors" && comp == "paper")) {
        playerPoints += 1;
        return `You win, ${player} beats ${comp}.`;
    }
    else if (player == comp) {
        return "Draw";
    }
    else {
        computerPoints += 1;
        return `You lose, ${comp} beats ${player}.`;
    }
        
};


// Determine the winner
function winner(player, comp) {
    if (player == comp) return "Winner: Draw";
    else if (player > comp) return "Winner: Player";
    else return "Winner: Computer"
}

// Initialize variables
let playerPoints = 0;
let computerPoints = 0;


const selection = document.querySelectorAll('button');
let player = document.querySelector(".player-points")
let computer = document.querySelector(".comp-points")
let recap = document.querySelector(".recap")

// Add listeners for each player pick
selection.forEach((btn) => {

    btn.addEventListener('click', () => {

        recap.textContent = playGame(btn.value, getComputerChoice())
        player.textContent = playerPoints;
        computer.textContent = computerPoints;

        // Little feature
        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
        document.querySelector('body').style.backgroundColor = randomColor;

        if (playerPoints == 5 || computerPoints == 5){
            recap.textContent = winner(playerPoints, computerPoints);
            playerPoints = 0;
            computerPoints = 0;
        }
    });
});


