let operand1 = "+";
let operand2 = "+";
let operator = null;
let result = null;
let screen = document.querySelector(".display");

function displayToScreen(screen, content) {
    if (content[0] == "+" && content.length > 1) {
        screen.textContent = content.substring(1);
    } else {
        screen.textContent = content;
    }
}

numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click", () => {
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
                operand2  += "0";
            }
            displayToScreen(screen, operand2);
        }
    })
});

let negativeToggle = document.querySelector(".negativeToggle");
negativeToggle.addEventListener("click", () => {
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