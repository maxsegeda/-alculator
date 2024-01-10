class Calculator {
  constructor() {
    this.reser();
  }

  reset() {
    this.currentInput = "";
    this.operator = "";
    this.previousInput = "";
  }

  appendNumber(number) {
    this.currentInput += number;
    this.updateDisplay();
  }
  setOperator(operator) {
    if (this.currentInput !== "") {
      this.operator = operator;
      this.previousInput = this.currentInput;
      this.currentInput = "";
    }
  }
  calculate() {
    let result;
    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      default:
        return;
    }

    this.currentInput = result.toString();
    this.operator = "";
    this.previousInput = "";
    this.updateDisplay();
  }
  clear() {
    this.currentInput = "";
    this.operator = "";
    this.previousInput = "";
    this.updateDisplay();
  }
  updateDisplay() {
    document.getElementById("display").value = this.currentInput;
  }
}

const calculator = new Calculator();
