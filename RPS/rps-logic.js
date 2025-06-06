function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getUserChoice() {
  const input = window.prompt("Rock, Paper, or Scissors?:");
  if (!input) return null;
  const formatted =
    input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();
  const validChoices = ["Rock", "Paper", "Scissors"];
  return validChoices.includes(formatted) ? formatted : null;
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "TIE GAME!";
  }

  const wins = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  if (wins[player] === computer) {
    return `You win! You chose ${player}, computer chose ${computer}`;
  } else {
    return `Computer wins! You chose ${player}, computer chose ${computer}`;
  }
}

// Run the game
const playerChoice = getUserChoice();

if (playerChoice === null) {
  console.log("Invalid input. Please choose Rock, Paper, or Scissors.");
} else {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  console.log(result);
}