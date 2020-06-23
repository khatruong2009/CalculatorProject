let displayValue = document.querySelector("#displayValue");

let add = function(num1, num2) {
 return num1 + num2;
}

let subtract = function(num1, num2) {
 return num1 - num2;
}

let multiply = function(num1, num2) {
 return num1 * num2;
}

let divide = function(num1, num2) {
 return num1 / num2;
}

function operate(num1, num2, math) {
 return math(num1, num2);
}

