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

function floatify(number){
       return parseFloat((number).toFixed(10));
    }

let display = document.querySelector('.display');
let secondDisplay = document.querySelector('.second-display');
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
let decimal = document.querySelector('#decimal');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let backspace = document.querySelector('#delete');
let addition = document.querySelector('#add');
let subtraction = document.querySelector('#subtract');
let multiplication = document.querySelector('#multiply');
let division = document.querySelector('#divide');
let numbers = '0';
let splitNumbers = [];
let initial = true;
let initialDecimal = false;

one.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '1';
        numbers += '1';
    } else if (display.textContent.length < 10) {
        display.textContent += '1';
        numbers += '1';
    }
    initial = false;
})
two.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '2';
        numbers += '2';
    } else if (display.textContent.length < 10) {
        display.textContent += '2';
        numbers += '2';
    }
    initial = false;
})
three.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '3';
        numbers += '3';
    } else if (display.textContent.length < 10) {
        display.textContent += '3';
        numbers += '3';
    }
    initial = false;
})
four.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '4';
        numbers += '4';
    } else if (display.textContent.length < 10) {
        display.textContent += '4';
        numbers += '4';
    }
    initial = false;
})
five.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '5';
        numbers += '5';
    } else if (display.textContent.length < 10) {
        display.textContent += '5';
        numbers += '5';
    }
    initial = false;
})
six.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '6';
        numbers += '6';
    } else if (display.textContent.length < 10) {
        display.textContent += '6';
        numbers += '6';
    }
    initial = false;
})
seven.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '7';
        numbers += '7';
    } else if (display.textContent.length < 10) {
        display.textContent += '7';
        numbers += '7';
    }
    initial = false;
})
eight.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '8';
        numbers += '8';
    } else if (display.textContent.length < 10) {
        display.textContent += '8';
        numbers += '8';
    }
    initial = false;
})
nine.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent += '9';
        numbers += '9';
    } else if (display.textContent.length < 10) {
        display.textContent += '9';
        numbers += '9';
    }
    initial = false;
})
zero.addEventListener('click', () => {
    if (initial) {
        display.textContent = '';
        numbers = '';
        display.textContent = '0';
        numbers = '0';
    } else if (display.textContent == '0') {
    } else if (display.textContent.length < 10) {
        display.textContent += '0';
        numbers += '0';
    }
    initial = false;
})
decimal.addEventListener('click', () => {
        if (initial) {
            display.textContent = '';
            numbers = '';
            display.textContent += '.';
            numbers += '.';
        } else if (initialDecimal) {

        } else if (display.textContent.length < 10) {
            display.textContent += '.';
            numbers += '.';
        }
        initial = false;
        initialDecimal = true;
})
clear.addEventListener('click', () => {
    display.textContent = '0';
    numbers = '0';
    splitNumbers = [];
    initial = true;
    initialDecimal = false;
    secondDisplay.textContent = '';
})
backspace.addEventListener('click', () => {
    if (display.textContent) {
        if (display.textContent.length == 1) {
            display.textContent = '';
            numbers = numbers.slice(0, -1);
        }
        else {
            display.textContent = display.textContent.slice(0, -1);
            numbers = numbers.slice(0, -1);
        }
    }
    if (!display.textContent.includes('.')) {
        initialDecimal = false;
    }
})


addition.addEventListener('click', () => {
    splitNumbers = numbers.split(' ');
    if (numbers == 'Ouch!!!') {

    } else if (splitNumbers[splitNumbers.length-1] == '') {
        splitNumbers[splitNumbers.length-2] = '+';
        numbers = splitNumbers.join(' ');
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    } else if (splitNumbers.length == 3 && splitNumbers[splitNumbers.length-1]) {
        if (numbers.includes('.')) {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2]));
            numbers = floatify(numbers);
            numbers = numbers.toString() + ' + ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        } else {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2])) + ' + ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        }
    } else {
        numbers += ' + ';
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    }
})

subtraction.addEventListener('click', () => {
    splitNumbers = numbers.split(' ');
    if (numbers == 'Ouch!!!') {

    } else if (splitNumbers[splitNumbers.length-1] == '') {
        splitNumbers[splitNumbers.length-2] = '-';
        numbers = splitNumbers.join(' ');
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    } else if (splitNumbers.length == 3 && splitNumbers[splitNumbers.length-1]) {
        if (numbers.includes('.')) {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2]));
            numbers = floatify(numbers);
            numbers = numbers.toString() + ' - ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        } else {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2])) + ' - ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        }
    } else {
        numbers += ' - ';
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    }
})

multiplication.addEventListener('click', () => {
    splitNumbers = numbers.split(' ');
    if (numbers == 'Ouch!!!') {

    } else if (splitNumbers[splitNumbers.length-1] == '') {
        splitNumbers[splitNumbers.length-2] = '*';
        numbers = splitNumbers.join(' ');
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    } else if (splitNumbers.length == 3 && splitNumbers[splitNumbers.length-1]) {
        if (numbers.includes('.')) {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2]));
            numbers = floatify(numbers);
            numbers = numbers.toString() + ' * ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        } else {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2])) + ' * ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        }
    } else {
        numbers += ' * ';
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    }
})

division.addEventListener('click', () => {
    splitNumbers = numbers.split(' ');
    if (numbers == 'Ouch!!!') {

    } else if (splitNumbers[splitNumbers.length-1] == '') {
        splitNumbers[splitNumbers.length-2] = '/';
        numbers = splitNumbers.join(' ');
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    } else if (splitNumbers.length == 3 && splitNumbers[splitNumbers.length-1]) {
        if (numbers.includes('.')) {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2]));
            numbers = floatify(numbers);
            numbers = numbers.toString() + ' / ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        } else {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2])) + ' / ';
            secondDisplay.textContent = numbers;
            display.textContent = '';
            initialDecimal = false;
            initial = false;
        }
    } else {
    numbers += ' / ';
        secondDisplay.textContent = numbers;
        display.textContent = '';
        initialDecimal = false;
        initial = false;
    }
})

equal.addEventListener('click', () => {
    splitNumbers = numbers.split(' ')
    if (numbers == '0 / 0') {
        display.textContent = 'Ouch!!!';
        secondDisplay.textContent = '';
        numbers = display.textContent;
        initial = true;
        initialDecimal = false;
    } else if (splitNumbers.length == 3 && splitNumbers[splitNumbers.length-1]) {
        if (numbers.includes('.')) {
            if (numbers.includes('e')) {
                numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2]));
                display.textContent = parseFloat(numbers).toExponential(8);
                numbers = display.textContent;
                secondDisplay.textContent = '';
                splitNumbers = [];
                initial = true;
                initialDecimal = false;
            } else {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2]));
            numbers = floatify(numbers);
            numbers = numbers.toString();
            display.textContent = numbers;
            secondDisplay.textContent = '';
            splitNumbers = [];
            initial = true;
            initialDecimal = false;
            }
        } else {
            numbers = operate(parseFloat(splitNumbers[0]), splitNumbers[1], parseFloat(splitNumbers[2]));
            if (numbers.toString().length > 10) {
                display.textContent = parseInt(numbers).toExponential(8);
            } else {
                display.textContent = numbers;
            }
            numbers = display.textContent;
            secondDisplay.textContent = '';
            splitNumbers = [];
            initial = true;
            initialDecimal = false;
        }
    }
})
