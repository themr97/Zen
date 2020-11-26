// DOM


var con = document.createElement("div");
con.setAttribute("class","container");

var hdb = document.createElement("h1");
hdb.setAttribute("class","display-1");
hdb.style.justifyContent = "center";
hdb.innerText = "Simple Calculator";
con.appendChild(hdb);


var div1 = document.createElement("div");
div1.setAttribute("class","row calculator-keys");
div1.style.marginTop = "30%";
con.appendChild(div1);

var rse = document.createElement("input");
rse.setAttribute("class","col-12 calculator-screen");
rse.setAttribute("type","input");
rse.setAttribute("id","result")
rse.style.padding = "10px"
rse.style.marginBottom = "50px"
div1.appendChild(rse);
rse.disabled = true;



var one = myEle('button','button', '1',  'btn btn-primary col-4');
var two = myEle('button','button', '2',  'btn btn-primary col-4');
var three = myEle('button','button', '3',  'btn btn-primary col-4');
var four = myEle('button','button', '4',  'btn btn-primary col-4');
var five = myEle('button','button', '5',  'btn btn-primary col-4');
var six = myEle('button','button', '6',  'btn btn-primary col-4');
var seve = myEle('button','button', '7',  'btn btn-primary col-4');
var eigh = myEle('button','button', '8',  'btn btn-primary col-4');
var nine = myEle('button','button', '9',  'btn btn-primary col-4');
var nine = myEle('button','button', '9',  'btn btn-primary col-4');
var zero = myEle('button','button', '0', 'btn btn-primary col-4');
var clear = myEle('button','button', 'all-clear', 'btn btn-danger col-4');
var plus = myEle('button','button', '+', 'btn btn-primary col-4');
var minus = myEle('button','button', '-', 'btn btn-primary col-4');
var mul = myEle('button','button', '*', 'btn btn-primary col-4');
var divide = myEle('button','button', '/', 'btn btn-primary col-4');
var equal = myEle('button','button', '=', 'btn btn-warning col-8');

document.body.append(con);

function myEle(elem, elemType = ' ', elemValue = ' ', elemClass = '')
{
    var element = document.createElement(elem);
    element.setAttribute('type', elemType)
    element.setAttribute('value', elemValue)
    element.setAttribute('class', elemClass);
    element.innerText = elemValue;
    div1.appendChild(element);
    return element
}







// Main JS

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  

  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseInt(displayValue);
    
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = `${parseInt(result.toFixed(7))}`;
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case 'all-clear':
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseInt(value))) {
          inputDigit(value);
        }
    }
  
    updateDisplay();
  });