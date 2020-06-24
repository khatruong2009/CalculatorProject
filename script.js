let display = document.querySelector("#displayValue");
let currentValue = 0;
const keys = document.querySelector(".calculator");

//event listener for when a key is pressed
keys.addEventListener("click", e => {

 //actions when a key is pressed
 if (e.target.matches("button")) {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;

  //displays number on the display when a non action button is pressed
  if (!action) {
   if (displayedNum === "0") {
    // if the number is 0, replace the number on the screen
    display.textContent = keyContent;
   } else {
    //if the number is not 0, concantenate the number on to the existing number
    display.textContent = displayedNum + keyContent;
   }
  }

  //when an operator is clicked, add a class to show it is highlighted
  if (
   action === "plus" ||
   action === "minus" ||
   action === "times" ||
   action === "divide"
  ) {
   key.classList.add("is-clicked");
  }
  
  

  if (action === "clear") {
   console.log("clear key");
  } 
 
  if (action === "equals") {
   console.log("equals key");
  }
  
 }
 

 

 


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
{}})
