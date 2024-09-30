let num1 = 0;
let operator = "";
let num2 = 0;

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return b !== 0 ? a / b : "cannot divide by zero";
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

console.log(operate(10, "multiply", 5));
