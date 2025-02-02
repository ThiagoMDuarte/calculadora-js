const container = document.querySelector('.container')
const display = container.querySelector('#display')
const numButtons = container.querySelectorAll('[id^="button-"]')
const igualButton = container.querySelector('#igual')
const resultDisplay = container.querySelector('#result')
const limparButton = container.querySelector('#limpar')
const delButton = container.querySelector('#del')

delButton.addEventListener('click',deleteLast)

limparButton.addEventListener('click',limparDisplay)

igualButton.addEventListener('click',getExpression)   

function deleteLast () {
    if (display.value > 0) {
        let string = display.value
        let newStr = string.slice(0, -1);
        display.value = newStr
    }
}

function limparDisplay () {
    display.value = ''
}

function getExpression () {
    let expression = display.value
    const operadores = ['+', '-', '/', '*'];
    const indiceOperador = []; // indice do operador

    for (let i = 0; i < expression.length; i++) {
        if (operadores.includes(expression[i])) {
            indiceOperador.push(i);
        }
    } 
    // O '=' NAO VAI FUNCIONAR SE ESTIVER VAZIO O DISPLAY
    if (expression.length > 0) {
    const operatorIndex = indiceOperador[0]
    const firstNumber = expression.slice(0,operatorIndex)
    const secondNumber = expression.slice(operatorIndex + 1)
    const operator = expression[operatorIndex]
//nao tiver dois numeros e 1 operador
        if (!firstNumber||!secondNumber||!operator) {
            return 'Error'}
        else {
    const result = operate(operator,Number(firstNumber),Number(secondNumber))
    display.value = result}

}}

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
        return add(firstNumber,secondNumber)
    } else if (operator === '-') {
        return subtract(firstNumber,secondNumber)
    }else if (operator === '*') {
        return multiply(firstNumber,secondNumber)
    }else if (operator === '/') {
        if (firstNumber === 0 || secondNumber === 0) {
            return 'Banana'
        }
        return divide(firstNumber,secondNumber)
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
    if (num1 > num2) {
    return Math.round(num1/num2)
}
    else {
        return (num1/num2).toFixed(2)
    }
}

