let display = document.querySelector(".displayValue");
let keys = document.querySelector(".keys");
let displayValue = 0;
display.innerHTML = displayValue;
let numbers = document.querySelector(".number");
let clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
 displayValue = 0;
})

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {

 }
}
)

//operate function
function operate(num1, num2, math) {
 return math(num1, num2);
}

//math functions
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
 return num1/num2;
}

