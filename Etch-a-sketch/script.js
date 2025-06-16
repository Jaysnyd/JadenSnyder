// Global variable for Drawing Color
let color = "black";

// INITIALIZATION
document.addEventListener("DOMContentLoaded", function () {
  // Default Size of board
  createBoard(5);

  // User adjusts Size of board
  let changeGridSize = document.querySelector("#change-grid");
  changeGridSize.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });

  // Change color back to solid black
  let colorBlack = document.querySelector("#color-black");
  colorBlack.addEventListener("click", function () {
    solidBlack();
  });
});

// CREATE BOARD - Add specified number of divs to grid
function createBoard(size) {
  let board = document.querySelector(".board");

  //Adjust grid size to given size value
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create divs inside grid/board
  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.backgroundColor = "white";
    // COLOR THE DIV
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

// OBTAIN SIZE OF GRID FROM USER
function getSize() {
  let input = prompt("Input Grid Size: \n Must be between 5 - 100");
  let message = document.querySelector("#message");

  // Adjust grid size message based on input
  if (input == "") {
    message.innerHTML = "Provide a number to change grid size";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Provide a number between 1 - 100";
  } else {
    message.innerHTML = "";
    return input;
  }
}

// SET DRAWING COLOR OF GRID
function colorDiv() {
  if (color == "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

// CLEAR CANVAS
function clearCanvas() {
  // Grab all 'pixels'/divs - Store in array
  let divs = document.getElementsByClassName("pixel");
  // Loop through array
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "white";
  }
}
