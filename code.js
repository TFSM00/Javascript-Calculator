const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

const equalsButton = document.getElementsByClassName('button b=')[0]
const clearButton = document.getElementsByClassName('button clear')[0]
const deleteButton = document.getElementsByClassName('button delete')[0]
const pointButton = document.getElementsByClassName('button b.')[0]
const lastCalculationScreen = document.getElementById('eq')
const currentCalculationScreen = document.getElementById('input')

console.log(equalsButton)
// window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clearScreen)
deleteButton.addEventListener('click', deleteNum)
pointButton.addEventListener('click', addPoint)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => addNum(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperator(button.textContent))
);

firstNum = "0"
secondNum = "0"
currentOperation = ""


function clearScreen() {
    currentCalculationScreen.textContent = "0"
    lastCalculationScreen.textContent = ""
    firstNum = ""
    secondNum = ""
    currentOperation = ""
}

function deleteNum() {
    currentCalculationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1)
};


function evaluate() {
    if (currentOperation === "") return
    if (currentOperation === '/' && currentCalculationScreen.textContent === '0') {
        alert("You can't divide by 0!")
        return
    }
    secondNum = currentCalculationScreen.textContent
    currentCalculationScreen.textContent = roundResult(
      operate(currentOperation, firstNum, secondNum)
    )
    lastCalculationScreen.textContent = `${firstNum} ${currentOperation} ${secondNum} =`
    currentOperation = ""
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
};

function addPoint () {
    if (currentCalculationScreen.textContent === '') {
        currentCalculationScreen.textContent = '0'
    }

    if (currentCalculationScreen.textContent.includes('.')) return
    currentCalculationScreen.textContent += '.'
};

function addNum (num) {
    if (currentCalculationScreen.textContent === "0") {
        currentCalculationScreen.textContent = ""
    } else if (currentOperation != "") {
        currentCalculationScreen.textContent = ""
    }
    currentCalculationScreen.textContent += num
};


function setOperator (op) {
    if (currentOperation !== "") evaluate()
    firstNum = currentCalculationScreen.textContent
    currentOperation = op
    lastCalculationScreen.textContent = `${firstNum} ${currentOperation}`
}

function add(a, b) {
    return a + b;
};
  
function subtract(a, b) {
    return a - b;
};
  
function divide(a , b) {
    return a / b
};
  
function multiply(a, b) {
    return a * b
};

function operate(a, op, b) {
    if (op==="+") {
        add(a,b);
    } else if (op==="-") {
        subtract(a,b);
    } else if (op==="*") {
        multiply(a,b);
    } else if (op==="/" && a!= 0 && b!= 0) {
        divide(a,b);
    } else {
        return null;
    }
};
