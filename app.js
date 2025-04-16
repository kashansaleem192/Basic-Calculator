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

    if ((char >= '0' && char <= '9') || char === '.') {
      currentNumber += char;
    }

    if (char === '%') {
      display.value= (parseFloat(currentNumber) / 100).toString();
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
  }

  if (currentNumber !== '') {
    if (operator === '+') {
      result += parseFloat(currentNumber);
    } else if (operator === '-') {
      result -= parseFloat(currentNumber);
    } else if (operator === '*') {
      result *= parseFloat(currentNumber);
    } else if (operator === '/') {
      result /= parseFloat(currentNumber);
    }
  }

  display.value = result;
}

function squareValue() {
  display.value = display.value * display.value;
}

function percentValue(){
  let result = parseFloat(display.value);


  display.value = (result / 100).toString();
}