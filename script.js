const numBtn = document.getElementsByClassName("numBtn");
const culcOutput = document.getElementById("output");
const clearAll = document.getElementById("clearAll");
const pointBtn = document.getElementById("pointBtn");
const equalBtn = document.getElementById("equal");
const changeOperation = document.getElementById("changeOperation");
const degreeOperation = document.getElementById("degree")

var expression = '0';
const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function numInput(n) {
    culcOutput.style = "color: white"
    if (expression === "0") {
        culcOutput.value = '';
        expression = '';
    };
    expression += n;
    culcOutput.value = expression;
};

clearAll.addEventListener("click", function() {
    expression = '0';
    culcOutput.value = expression;
    culcOutput.style = "color: gray";
});

pointBtn.addEventListener("click", function() {
    culcOutput.style = "color: white";
    if (expression[expression.length - 1] in numList && !(expression.split(' ')[expression.split(' ').length - 1].includes("."))) {
        expression += '.';
        culcOutput.value = expression;
    };
});

function inputOperation(operation) {
    if (expression[expression.length - 1] in numList) {
        culcOutput.style = 'color: white';
        expression += ' ' + operation + ' ';
        culcOutput.value = expression;
    };
    
};

equalBtn.addEventListener("click", function() {
    culcOutput.value = eval(expression);
    expression = "";
})

changeOperation.addEventListener("click", function() {
    if (expression[expression.length - 1] in numList) {
        var splittedExpression = expression.split(" ");
        var elem = Number(splittedExpression[splittedExpression.length - 1]);
        elem = -elem;
        splittedExpression.pop();
        splittedExpression.push(String(elem));
        expression = splittedExpression.join(' ');
        culcOutput.value = expression;
    }
});


degreeOperation.addEventListener("click", function() {
    if (expression[expression.length - 1] in numList) {
        expression += " ** ";
        culcOutput.value = expression;
    };
});