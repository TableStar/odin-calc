let num1 = 0;
let operator = "";
let num2 = 0;
let displayValue = 0;

const getDisplayValue = () => displayValue;

const setDisplayValue = (value) => {
  displayValue = !isNaN(value) ? value : "FOOLS!";
  updateDisplay();
};

const updateDisplay = () => {
  const display = document.querySelector("#displayValue");
  if (displayValue.toString().includes("")) {
    display.textContent = displayValue;
  } else {
    display.textContent = formatNumber(displayValue);
  }
};

const add = (a, b) => {
  return Number(a) + Number(b);
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return b != 0 ? a / b : "FOOLS!";
};

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "add":
      return add(num1, num2);

    case "subtract":
      return subtract(num1, num2);

    case "multiply":
      return multiply(num1, num2);

    case "divide":
      return divide(num1, num2);
  }
};

const display = document.querySelector("#displayValue");
display.textContent = displayValue;

const handleClearButton = () => {
  num1 = 0;
  num2 = 0;
  operator = "";
  setDisplayValue(0);
};

const toScientificNotation = (num, precision = 4) => {
  num = Number(num);
  if (num === 0) return "0";
  const exponent = Math.floor(Math.log10(Math.abs(num)));
  const mantissa = num / Math.pow(10, exponent);
  const roundedMantissa = mantissa.toFixed(precision);
  return `${roundedMantissa}e${exponent >= 0 ? "+" : ""}${exponent}`;
};

const formatNumber = (num, precision = 4) => {
  num = Number(num);
  if (num === 0) return "0";

  const absNum = Math.abs(num);
  if (absNum < 0.0001 || absNum >= 10000000) {
    return toScientificNotation(num, precision);
  } else {
    return num.toFixed(precision).replace(/\.?0+$/, "");
  }
};

const handleNumberInput = (num) => {
  if (displayValue == 0) {
    displayValue = num;
  } else if (displayValue.toString().includes(".")) {
    displayValue = displayValue + num;
  } else if (displayValue < 1000000000000) {
    displayValue = displayValue * 10 + num;
  }
  updateDisplay();
};

const handleOperatorInput = (e) => {
  if (!operator) {
    num1 = displayValue;
    operator = e.id;
    displayValue = 0;
  } else {
    handleCalculate();
    operator = e.id;
    displayValue = 0;
  }
};

const handleCalculate = () => {
  num2 = displayValue;
  let result = operate(num1, operator, num2);
  setDisplayValue(result);
  num1 = result;
  operator = "";
};

const handlePercentageButton = () => {
  let result = displayValue / 100;
  console.log(result);

  setDisplayValue(result);
};

const handleDecimalButton = () => {
  if (!displayValue.toString().includes(".")) {
    displayValue = displayValue + ".";
  }
  console.log(displayValue);
  updateDisplay();
};

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  handleClearButton();
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((e) => {
  e.addEventListener("click", () => {
    handleOperatorInput(e);
  });
});

const buttons = document.querySelectorAll("button");

buttons.forEach((e, i, arr) => {
  if (arr[i].id < 10) {
    e.addEventListener("click", () => {
      handleNumberInput(Number(arr[i].id));
    });
  }
});

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
  if (operator) {
    handleCalculate();
  }
});

const percentageButton = document.querySelector("#percentage");
percentageButton.addEventListener("click", () => {
  handlePercentageButton();
});

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
  handleDecimalButton();
});
