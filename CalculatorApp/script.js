var outputBox = document.getElementById('outputBox');
var newLine = true;
var num1, currentOperator;

function buttonPressed(button) {
    if (newLine) {
        outputBox.value = button;
        newLine = false;
    } else {
        var currentVal = outputBox.value;
        outputBox.value = currentVal + button;
    }

    if (button == null) {
        outputBox.value = 0;
        num1 = 0;
        newLine = true;
    }
}

function operatorBtnPressed(operator) {
    currentOperator = operator;
    num1 = parseInt(outputBox.value);
    newLine = true
}

function equalBtnPressed() {
    var num2 = parseInt(outputBox.value);
    var answer;

    switch (currentOperator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "*":
            answer = num1 * num2;
            break;
        case "/":
            answer = num1 / num2;
            break;
    }
    outputBox.value = answer;
    newLine = true;
}