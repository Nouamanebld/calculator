function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert("You cannot divide by 0!!!");
    } else {
        return num1 / num2;
    }
}

function multiply(num1, num2) {
    return num1 * num2;
}

function operate(op, num1, num2) {
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return subtract(num1, num2);
    } else if (op === '/') {
        return divide(num1, num2);
    } else if (op === '*') {
        return multiply(num1, num2);
    }
}

let num1;
let num2;
let operator;
let hit = false;

const display = document.querySelector('.display');
const num = document.querySelectorAll('.num');
num.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = "";
        }
        display.textContent += number.textContent;
    }); 
});

const ops = document.querySelectorAll('.ops');
ops.forEach((op) => {
    op.addEventListener('click', () => {
        if (!hit) {
            num1 = parseInt(display.textContent);
            operator = op.textContent;
            display.textContent += operator;
            hit = true;
        } else if (hit) {
            num2 = parseInt(display.textContent.replace((num1 + operator), ""));
            num1 = operate(operator, num1, num2);
            operator = op.textContent;
            display.textContent = num1 + operator; 
            hit = true;
        }
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    if (operator && num1) {
        num2 = parseInt(display.textContent.replace((num1 + operator), ""));
        display.textContent = operate(operator, num1, num2);
        hit = false;
    }
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = "0";
    num1 = 0;
    hit = false;
});