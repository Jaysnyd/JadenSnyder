// Variables 
const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreBoard = document.getElementById("score-board");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    //Get computer choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    //Determine result
    let result = "";
    
    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
        case "Rock":
            result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "Paper":
            result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "Scissors":
            result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
    }
}


// Display choices and result
playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent = result;

//Remove text color and win/lose result classes
resultDisplay.classList.remove("greenText", "redText", "hideResult");

// Change win case color, Update Scoreboard if player wins
switch(result){
    case "YOU WIN!":
        resultDisplay.setAttribute("class", "greenText");
        playerScore++;
        scoreBoard.textContent = playerScore;
        break;
    case "YOU LOSE!":
        resultDisplay.setAttribute("class", "redText");
        break;
    case "IT'S A TIE!":
        resultDisplay.color = "white";
        break;
}
}

function resetGame(){
    // Reset Scoreboard
    playerScore = 0;
    scoreBoard.textContent = playerScore;

    //Hide win/lose case
    resultDisplay.setAttribute("class", "hideResult");

    // Reset User/Comp choices
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
}