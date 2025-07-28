const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let firstOperand = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Backspace button
    if (button.id === 'backspace') {
      if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
      }
      return;
    }

    // Plus/Minus button
    if (button.id === 'plus-minus') {
      if (currentInput) {
        if (currentInput.startsWith('-')) {
          currentInput = currentInput.slice(1);
        } else {
          currentInput = '-' + currentInput;
        }
        display.textContent = currentInput;
      }
      return;
    }

    // Clear button
    if (button.id === 'clear') {
      currentInput = '';
      firstOperand = '';
      operator = '';
      display.textContent = '0';
      return;
    }

    // Equal button
    if (button.id === 'equal') {
      try {
        const expression = firstOperand + operator + currentInput;
        const result = eval(expression);
        display.textContent = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
        resultDisplayed = true;
      } catch (e) {
        display.textContent = 'Error';
      }
      return;
    }

    // Operator buttons
    if (button.classList.contains('operator')) {
      if (currentInput === '') return;
      if (firstOperand !== '' && operator !== '') {
        firstOperand = eval(firstOperand + operator + currentInput);
      } else {
        firstOperand = currentInput;
      }
      operator = value;
      currentInput = '';
      // Show the number and operator on the display
      display.textContent = firstOperand + ' ' + button.textContent;
      return;
    }

    // Number and dot input
    if (resultDisplayed) {
      currentInput = '';
      resultDisplayed = false;
    }
    // Prevent multiple decimals
    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    
    // Show the full expression if there's an operator
    if (operator && firstOperand) {
      display.textContent = firstOperand + ' ' + getOperatorSymbol(operator) + ' ' + currentInput;
    } else {
      display.textContent = currentInput;
    }
  });
});

// Helper function to get the display symbol for operators
function getOperatorSymbol(op) {
  switch(op) {
    case '+': return '+';
    case '-': return '−';
    case '*': return '×';
    case '/': return '÷';
    default: return op;
  }
}
