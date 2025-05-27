let operand1 = "+";
let operand2 = "+";
let operator = null;
let result = null;
let justEvaluated = false;
let operand1DecimalInUse = false;
let operand2DecimalInUse = false;
let screen = document.querySelector(".display");

function displayToScreen(screen, content) {
    if (content[0] == "+" && content.length > 1) {
        screen.textContent = content.substring(1);
    } else {
        screen.textContent = content;
    }
}

function evaluate() {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    if (operator == "%") {
        if (operand2 == 0) {
            displayToScreen(screen, "Zero?");
        } else {
            result = operand1 % operand2;
        }
    } else if (operator == "/") {
        if (operand2 == 0) {
            displayToScreen(screen, "Zero?");
        } else {
            result = operand1 / operand2;
        }
    } else if (operator == "*") {
        result = operand1 * operand2;
    } else if (operator == "-") {
        result = operand1 - operand2;
    } else if (operator == "+") {
        result = operand1 + operand2;
    }
}

function assignOperator(func) {
    if (func.classList.contains("modulo")) {
        operator = "%";
    } else if (func.classList.contains("divide")) {
        operator = "/";
    } else if (func.classList.contains("multiply")) {
        operator = "*";
    } else if (func.classList.contains("subtract")) {
        operator = "-";
    } else if (func.classList.contains("add")) {
        operator = "+";
    }
}

function assignOperand(number) {
    if (operator === null) {
        if (number.classList.contains("one")) {
            operand1 += "1";
        } else if (number.classList.contains("two")) {
            operand1 += "2";
        } else if (number.classList.contains("three")) {
            operand1 += "3";
        } else if (number.classList.contains("four")) {
            operand1 += "4";
        } else if (number.classList.contains("five")) {
            operand1 += "5";
        } else if (number.classList.contains("six")) {
            operand1 += "6";
        } else if (number.classList.contains("seven")) {
            operand1 += "7";
        } else if (number.classList.contains("eight")) {
            operand1 += "8";
        } else if (number.classList.contains("nine")) {
            operand1 += "9";
        } else if (number.classList.contains("zero")) {
            operand1 += "0";
        }
        displayToScreen(screen, operand1);
    } else {
        if (number.classList.contains("one")) {
            operand2 += "1";
        } else if (number.classList.contains("two")) {
            operand2 += "2";
        } else if (number.classList.contains("three")) {
            operand2 += "3";
        } else if (number.classList.contains("four")) {
            operand2 += "4";
        } else if (number.classList.contains("five")) {
            operand2 += "5";
        } else if (number.classList.contains("six")) {
            operand2 += "6";
        } else if (number.classList.contains("seven")) {
            operand2 += "7";
        } else if (number.classList.contains("eight")) {
            operand2 += "8";
        } else if (number.classList.contains("nine")) {
            operand2 += "9";
        } else if (number.classList.contains("zero")) {
            operand2 += "0";
        }
        displayToScreen(screen, operand2);
    }
}

numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!justEvaluated) {
            assignOperand(number);
        } else {
            operand1 = "+";
            operand2 = "+";
            operator = null;
            result = null;
            justEvaluated = false;
            operand1DecimalInUse = false;
            operand2DecimalInUse = false;
            assignOperand(number);
        }
    })
});

let negativeToggle = document.querySelector(".negativeToggle");
negativeToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (operator === null) {
        if (operand1[0] == "+") {
            operand1 = "-" + operand1.substring(1)
        } else {
            operand1 = "+" + operand1.substring(1)
        }
        displayToScreen(screen, operand1);
    } else {
        if (operand2[0] == "+") {
            operand2 = "-" + operand2.substring(1)
        } else {
            operand2 = "+" + operand2.substring(1)
        }
        displayToScreen(screen, operand2);
    }
})

let ac = document.querySelector(".ac");
ac.addEventListener("click", (e) => {
    e.stopPropagation();
    operand1 = "+";
    operand2 = "+";
    operator = null;
    result = null;
    operand1DecimalInUse = false;
    operand2DecimalInUse = false;
    displayToScreen(screen, "0")
})

let functions = document.querySelectorAll(".function");
functions.forEach(func => {
    func.addEventListener("click", (e) => {
        if (operator === null) {
            assignOperator(func);
            displayToScreen(screen, operator);
        } else {
            evaluate();
            displayToScreen(screen, result);
            operand1 = (result >= 0 ? "+" : "") + result.toString();
            assignOperator(func);
            operand2 = "";
        }
    })
})

let equalsTo = document.querySelector(".result");
equalsTo.addEventListener("click", (e) => {
    e.stopPropagation();
    evaluate();
    if (result != null) {
        displayToScreen(screen, result);
        justEvaluated = true;
    }
})

let backspace = document.querySelector(".back");
backspace.addEventListener("click", (e) => {
    e.stopPropagation();

    if (operator === null) {
        operand1 = operand1.substring(0, operand1.length - 1);
        displayToScreen(screen, operand1);
    } else {
        operand2 = operand2.substring(0, operand2.length - 1);
        displayToScreen(screen, operand2);
    }
})

let periodKey = document.querySelector(".decimal");
periodKey.addEventListener("click", (e) => {
    if (operator === null && !operand1DecimalInUse) {
        operand1 += ".";
        displayToScreen(screen, operand1);
        operand1DecimalInUse = true;
    } else if (operator !== null && !operand2DecimalInUse) {
        operand2 += ".";
        displayToScreen(screen, operand2);
        operand2DecimalInUse = true;
    }
})