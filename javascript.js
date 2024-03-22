function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let firstNum,
    secondNum,
    operator;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(+num1, +num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

let display = document.querySelector('.display');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let addition = document.querySelector('#add');
let subtraction = document.querySelector('#subtract');
let multiplication = document.querySelector('#multiply');
let division = document.querySelector('#divide');
let numbers = display.textContent;
let splitNumbers = numbers.split(' ');

one.addEventListener('click', () => {
    display.textContent += 1;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
two.addEventListener('click', () => {
    display.textContent += 2;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
three.addEventListener('click', () => {
    display.textContent += 3;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
four.addEventListener('click', () => {
    display.textContent += 4;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
five.addEventListener('click', () => {
    display.textContent += 5;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
six.addEventListener('click', () => {
    display.textContent += 6;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
seven.addEventListener('click', () => {
    display.textContent += 7;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
eight.addEventListener('click', () => {
    display.textContent += 8;
    numbers = display.textContent;
})
nine.addEventListener('click', () => {
    display.textContent += 9;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
zero.addEventListener('click', () => {
    display.textContent += 0;
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
clear.addEventListener('click', () => {
    display.textContent = '';
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
addition.addEventListener('click', () => {
    display.textContent += ' + ';
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
subtraction.addEventListener('click', () => {
    display.textContent += ' - ';
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
multiplication.addEventListener('click', () => {
    display.textContent += ' * ';
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})
division.addEventListener('click', () => {
    display.textContent += ' / ';
    numbers = display.textContent;
    splitNumbers = numbers.split(' ')
})

equal.addEventListener('click', () => {
    if (splitNumbers.length != 3) {
        display.textContent = 'Invalid Operation!!!'
    } else {
        display.textContent = operate(splitNumbers[0], splitNumbers[1], splitNumbers[2])
    }
})