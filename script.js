let firstNumber = ''
let secondNumber = ''
let operator = ''
let result = ''

const container = document.querySelector('.container')
const display = container.querySelector('#display')
let buttons = container.querySelectorAll('[id^="button-"]') //NodeList

buttons.forEach(element => {
    element.addEventListener('click',writeDisplay)    
});

function writeDisplay (e) {
    const value = e.target.textContent
    const displayValue = display.value;
    display.value = displayValue + e.target.textContent;

}

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

