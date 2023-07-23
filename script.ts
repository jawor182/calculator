let numbers = document.querySelectorAll(".number");
let outputField = document.getElementById("output") as HTMLInputElement;
let operatorButtons = document.querySelectorAll(".operator");
let clearButton = document.querySelector(".clear");
let equalButton = document.querySelector(".equal");

let firstNum: number | null = null;
let secondNum: number | null = null;
let operator: string | null = null;

function add(num1: number, num2: number) {
    return num1 + num2;
}

function subtract(num1: number, num2: number) {
    return num1 - num2;
}

function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function divide(num1: number, num2: number) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        alert( "Can't divide  by 0");
        return 0;
    }
}

function operate(num1: number, num2: number, operator: string | null) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return 0;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        if (outputField.value === firstNum?.toString() || outputField.value === secondNum?.toString()) {
            outputField.value = ""; // Clear the output field if it contains the previous result
        }
        outputField.value += number.textContent || '';
    });
});

clearButton?.addEventListener("click", (e) => {
    e.preventDefault();
    outputField.value = "";
    firstNum = null;
    secondNum = null;
    operator = null;
});

equalButton?.addEventListener("click", (e) => {
    if (firstNum !== null && operator !== null && outputField.value !== "") {
        secondNum = parseFloat(outputField.value);
        outputField.value = operate(firstNum, secondNum, operator).toString().substring(0, 10);
        firstNum = parseFloat(outputField.value);
        operator = null;
        secondNum = null;
    }
});

operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (outputField.value !== "") {
            if (firstNum === null) {
                firstNum = parseFloat(outputField.value);
            } else {
                secondNum = parseFloat(outputField.value);
                if (operator !== null) {
                    outputField.value = operate(firstNum!, secondNum!, operator).toString();
                    firstNum = parseFloat(outputField.value);
                    outputField.value = "";
                }
            }
            operator = operatorBtn.textContent === "÷" ? "/" : operatorBtn.textContent === "X" ? "*" : operatorBtn.textContent;
            outputField.value = "";
        }
    });
});
