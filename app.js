var display = document.getElementById('display');


function typeValue(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = '';
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  let input = display.value;
  let result = 0;
  let currentNumber = '';
  let operator = '+';

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);

    if (char >= '0' && char <= '9' || char === '.') {
      currentNumber += char;
    }
    

    if (char === '+' || char === '-' || char === '*' || char === '/') {
      if (operator === '+') {
        result += parseFloat(currentNumber);
      } else if (operator === '-') {
        result -= parseFloat(currentNumber);
      } else if (operator === '*') {
        result *= parseFloat(currentNumber);
      } else if (operator === '/') {
        result /= parseFloat(currentNumber);
      }

      
      currentNumber = '';
      operator = char;
    }

   
    if (char === '%') {
      result = result * 0.01;
    }
  }

 
  if (operator === '+') {
    result += parseFloat(currentNumber);
  } else if (operator === '-') {
    result -= parseFloat(currentNumber);
  } else if (operator === '*') {
    result *= parseFloat(currentNumber);
  } else if (operator === '/') {
    result /= parseFloat(currentNumber);
  }

  display.value = result;
}

function squareValue() {
  let currentInput = display.value;
  if (currentInput) {
    let number = parseFloat(currentInput);
    display.value = Math.pow(number, 2); 
  }
}