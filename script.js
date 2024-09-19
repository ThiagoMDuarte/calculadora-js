let firstNumber = ''
let secondNumber = ''
let operator = ''
let result = ''

function operate (operator,firstNumber,secondNumber) {
    if (operator === '+') {
        add(firstNumber,secondNumber)
    } else if (operator === '-') {
        subtract(firstNumber,secondNumber)
    }else if (operator === '*') {
        multiply(firstNumber,secondNumber)
    }else if (operator === '/') {
        divide(firstNumber,secondNumber)
    }
}

function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

