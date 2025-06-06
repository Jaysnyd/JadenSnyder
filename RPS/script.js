// Variables 
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreBoard = document.getElementById("score-board");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    console.log(playerChoice);

    //Get computer choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    //Determine result
    let result = "";
    
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
    }
}

// Display choices
// Change win case to red or green based on scenario, switch case...
// Configure reset button to wipe scoreboard, choices, and win case
}