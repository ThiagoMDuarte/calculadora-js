let firstNumber = ''
let secondNumber = ''
let operator = ''
let result = ''

const container = document.querySelector('.container')
const display = container.querySelector('#display')
const numButtons = container.querySelectorAll('[id^="button-"]')
const operatorButtons = container.querySelectorAll('[id^="operador-"]')

/* operatorButtons.forEach(element => {
    element.addEventListener('click',writeDisplay)    
});
 */
numButtons.forEach(element => {
    element.addEventListener('click',writeDisplay)    
});

function writeDisplay (e) {
    const operators = ['+','-','/','*']
    const value = e.target.textContent
    const displayValue = display.value;
    const lastChar = displayValue[displayValue.length - 1]
    // Adiciona o valor se o display não estiver vazio ou o valor não for um operador
    if (displayValue || !operators.includes(value)) {
        // Não deixa adicionar dois operadores seguidos
        if (!operators.includes(lastChar) || !operators.includes(value)) {
        display.value = displayValue + value;
    }}
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

