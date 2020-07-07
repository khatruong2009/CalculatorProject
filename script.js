let display = document.querySelector(".displayValue");
let keys = document.querySelectorAll(".keys");
let operatorBtns = document.querySelectorAll(".operator");
let displayValue = 0;
display.innerHTML = displayValue;
let numbers = document.querySelector(".number");
let clear = document.querySelector("#clear");
let n1 = "", n2 = "", v, result, operator, operators = ["/", "*", "+", "-"], state = 0, print;

// clear.addEventListener("click", () => {
//  display.innerHTML = 0;
// }) 

function resetHighlight() {
 operatorBtns.forEach(elem => {
  elem.classList.remove("selected");
 })
}

//event listener for each of the keys
keys.forEach((elem) => {
 elem.addEventListener("click", () => {
 resetHighlight();
 v = elem.textContent;
 //switch (v) {
 // case "/": 
 //}

 //if an operator is clicked, operator(variable) equals the operator that was clicked
 if (operators.indexOf(v) != -1) {
  if (n1 == "") {
    n1 = 0; 
    print = 0;
  }
    operator = v;
    elem.classList.add("selected");
   // } else {
   //  n1 = 0;
   // print = 0;
   //}
   //state is used to switch between storing numbers in n1 or n2
   state = 1 - state;
 } else {
   //if the equal button is clicked, the result is stored in the result variable with the two numbers
   if (v == "=") {
    if (n1 !== "" && n2 !== "") {
      //eval executes the arguments 
      result = parseFloat((eval(n1 + operator + n2)).toFixed(8));
      print = result;
      n1 = result; // == 0 ? "" : result; 
      n2 = "";
      state = 1 - state;
      // if (result == 0) {
      //  n1 = "";
      // } else {
      //  n1 = result;
      //  state = 1 - state;
      // }
      // n2 = "";
    }
     else print = 0;
   } else if (v == "AC") {
     print = 0;
     n1 = n2 = "";
     state = 0;
   } else if (v == "+/-") {
     if (state) {
      n2 *= -1;
      print = n2;
     }
     else n1 *= -1;
     print = n1;
   }
   else {
     //if a number is clicked instead of an equals sign, it is concantenated on to the current number
      if (state) {
        n2 += v;
        print = n2;
      }
      else {
        n1 += v;
        print = n1;
      } 
   }
 }
 console.log(n1, n2, result);
 display.innerHTML = parseFloat(print);
})});




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

