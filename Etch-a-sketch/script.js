const grid = document.getElementById("grid-container");
const tools = document.getElementById("tools-container");

const gridSize = 500;
let rows = 5;
let cols = 5;

function createGrid() {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");

    cell.style.width = `${gridSize / cols - 2}px`;
    cell.style.height = `${gridSize / rows - 2}px`;
    cell.classList.add("cell");

    grid.appendChild(cell);

    //Add event listener when hovering divs to change color - Calls another function to change the color
  }
}

// Initiate Grid
createGrid();

//Function to change size of grid

//Function to change color (Solid black, RGB, or Color picker)

// Function to clear board

// Function to erase board
