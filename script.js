let display = document.querySelector(".displayValue");
let keys = document.querySelectorAll(".keys");
let operatorBtns = document.querySelectorAll(".operator");
let displayValue = 0;
display.innerHTML = displayValue;
let clear = document.querySelector("#clear");
let n1 = "", n2 = "", v, result, operator, operators = ["/", "*", "+", "-"], state = 0, print;

//function to take off the highlight of the operators once another key is clicked
function resetHighlight() {
 operatorBtns.forEach(elem => {
  elem.classList.remove("selected");
 })
}

//event listener for each of the keys
keys.forEach((elem) => {
 elem.addEventListener("click", () => {
   //remove highlight from operator if it is there
 resetHighlight();
 //store the value of the button clicked in v
 v = elem.textContent;

 //if an operator is clicked, operator(variable) equals the operator that was clicked
 if (operators.indexOf(v) != -1) {
   //if an operator is clicked and there is no first value, set the number = 0 and the display value = 0
  if (n1 == "") {
    n1 = 0; 
    print = 0;
  }
    //set the operator variable equals to the operator clicked and add highlight class
    operator = v;
    elem.classList.add("selected");
   //state is used to switch between storing numbers in n1 or n2
    state = 1 - state;
 } else {
   //if the equal button is clicked, the result is stored in the result variable with the two numbers
   if (v == "=") {
     //make sure that both n1 and n2 are chosen
    if (n1 !== "" && n2 !== "") {
      //eval executes the arguments and parseFloat makes it a floating point number so that it gets rid of unnecessary decimals
      result = parseFloat((eval(n1 + operator + n2)).toFixed(8));
      //puts the result into the print variable so that it will be displayed
      print = result;
      // moves the result to n1 and empties the n2 variable to get ready for the next equation
      n1 = result;
      n2 = "";
      //changes the state for the next number
      state = 1 - state;
    }
    //if an operator is clicked before there is a number, number1 is automatically set to 0
     else print = 0;
   } //steps for when AC button is clicked 
    else if (v == "AC") {
     print = 0;
     n1 = n2 = "";
     state = 0;
   } //steps for when the +/- button is clicked
    else if (v == "+/-") {
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
 // displays the result as a float on to the calculator display
 display.innerHTML = parseFloat(print);
})});


