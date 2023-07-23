var numbers = document.querySelectorAll(".number");
var outputField = document.getElementById("output");
var operatorButtons = document.querySelectorAll(".operator");
var clearButton = document.querySelector(".clear");
var equalButton = document.querySelector(".equal");
var firstNum = null;
var secondNum = null;
var operator = null;
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
    if (num2 !== 0) {
        return num1 / num2;
    }
    else {
        return "Cannot divide by zero!";
    }
}
function operate(num1, num2, operator) {
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
numbers.forEach(function (number) {
    number.addEventListener("click", function (e) {
        e.preventDefault();
        if (outputField.value === (firstNum === null || firstNum === void 0 ? void 0 : firstNum.toString()) || outputField.value === (secondNum === null || secondNum === void 0 ? void 0 : secondNum.toString())) {
            outputField.value = ""; // Clear the output field if it contains the previous result
        }
        outputField.value += number.textContent || '';
    });
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", function (e) {
    e.preventDefault();
    outputField.value = "";
    firstNum = null;
    secondNum = null;
    operator = null;
});
equalButton === null || equalButton === void 0 ? void 0 : equalButton.addEventListener("click", function (e) {
    if (firstNum !== null && operator !== null && outputField.value !== "") {
        secondNum = parseFloat(outputField.value);
        outputField.value = operate(firstNum, secondNum, operator).toString().substring(0, 10);
        firstNum = parseFloat(outputField.value);
        operator = null;
        secondNum = null;
    }
});
operatorButtons.forEach(function (operatorBtn) {
    operatorBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (outputField.value !== "") {
            if (firstNum === null) {
                firstNum = parseFloat(outputField.value);
            }
            else {
                secondNum = parseFloat(outputField.value);
                if (operator !== null) {
                    outputField.value = operate(firstNum, secondNum, operator).toString();
                    firstNum = parseFloat(outputField.value);
                    outputField.value = "";
                }
            }
            operator = operatorBtn.textContent === "÷" ? "/" : operatorBtn.textContent === "X" ? "*" : operatorBtn.textContent;
            outputField.value = "";
        }
    });
});
