// Select the display element
const display = document.getElementById('display');
// Select all calculator buttons
const buttons = document.querySelectorAll('.btn');

// Variable to keep track of current input
let currentInput = '';
let shouldReset = false;

// Add click event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear input and display
      currentInput = '';
      display.textContent = '0';
    } else if (value === '=') {
      // Try to evaluate the expression
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        shouldReset = true;
      } catch (err) {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      if (display.textContent === '0' || shouldReset) {
        currentInput = value;
        shouldReset = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
