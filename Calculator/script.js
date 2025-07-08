const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const methods = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  x: (a, b) => a * b,
  "/": (a, b) => a / b,
};

// Handle Button Inputs
const registerButtons = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => manage(button.textContent));
  });
};

// Handle Keyboard Inputs
const registerKeyboardInputs = () => {
  document.addEventListener("keydown", (e) => manage(e.key));
};

// Retrieve Correct Method
const getMethod = () => {
  for (const method in methods) {
    if (display.textContent.includes(method)) {
      // console.log(method); Gets correct method
      return method;
    }
  }
};

// Perform Calculated Operation
const operate = () => {
  const method = getMethod();
  // console.log(method);        RETURNS CORRECT METHOD
  if (!method) return; // Checks if method is falsy, reutrn; exits function before going any further

  // Split string in display - array of both operands
  const split = display.textContent.split(method);

  // Get operands
  const a = parseFloat(split[0]);
  const b = parseFloat(split[1]);
  if (isNaN(a) || isNaN(b)) {
    return (display.textContent = split.join(""));
  }

  // Dynamically choose and call function from methods object:
  const ans = methods[method](a, b);
  // console.log(ans);

  // If ans is not a number then Error is used ELSE format ans to 3 decimal places:
  return (display.textContent = isNaN(ans)
    ? "ERROR"
    : `${parseFloat(ans.toFixed(3))}`);
};

const handleError = (button) => {
  if (!isNan(button)) {
    return (display.textContent = button);
  } else {
    return (display.textContent = "");
  }
};

const manage = (button) => {
  if (display.textContent === "ERROR") {
    return handleError(button);
  }

  // Handle different calc buttons
  if (button === "=" || button === "Enter") {
    return operate();
  }

  if (button === "Clear") {
    return (display.textContent = "");
  }

  if (button === "Delete" || button === "Backspace") {
    if (display.textContent != "") {
      display.textContent = display.textContent.slice(0, -1);
    }
    return;
  }

  if (
    button === "." &&
    (display.textContent.includes(".") || display.textContent == "")
  ) {
    return;
  }

  if (button in methods && getMethod()) {
    operate();
    if (display.textContent === "ERROR") {
      return handleError(button);
    }
  }

  if (button in methods || !isNaN(button) || button === ".") {
    display.textContent += button;
  }
};

registerButtons();
registerKeyboardInputs();
