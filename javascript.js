const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divisionBtn = document.getElementById("divide");

const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equals");
const decimalBtn = document.getElementById("decimal");

const output = document.getElementById("output");


let displayValue = "";
let storedNumber1 = "";
let storedNumber2 = "";
let operator = "";
let result = 0;


const add = function(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

const subtract = function(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

const multiply = function(num1, num2) { 
  return parseInt(num1) * parseInt(num2);
}

const divide = function(num1, num2) {
    let value = (parseInt(num1) / parseInt(num2));
    return round(value, 2);
}

//rounds the value to the number called by precision
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

//takes a number and stores it in the correct variable to be called later
const storeNumber = function() {

    const [storedNumber1, storedNumber2] = displayValue.split(/\W{3}(.+)/g);

    //Store using an array to return multiple values
    return [storedNumber1, storedNumber2]
}

const operate = function(num1, num2, operator) {
    
    if (operator === "+") {
       result = add(num1, num2);
       console.log(result);
       return result
    } else if (operator === "-") {
        result = subtract(num1, num2);
        console.log(result);
        return result
    } else if (operator === "*") {
        result = multiply(num1, num2);
        console.log(result);
        return result
    } else if (operator === "/") {
        result = divide(num1, num2);
        console.log(result);
        return result
    } else {
        console.log("Please enter an operator");
    }

    
}

zero.addEventListener('click', () => {
    displayValue += "0"
    display();
})

one.addEventListener('click', () => {
    displayValue += "1"
    display();
})

two.addEventListener('click', () => {
    displayValue += "2"
    display();
})

three.addEventListener('click', () => {
    displayValue += "3"
    display();
})

four.addEventListener('click', () => {
    displayValue += "4"
    display();
})

five.addEventListener('click', () => {
    displayValue += "5"
    display();
})

six.addEventListener('click', () => {
    displayValue += "6"
    display();
})

seven.addEventListener('click', () => {
    displayValue += "7"
    display();
})

eight.addEventListener('click', () => {
    displayValue += "8"
    display();
})

nine.addEventListener('click', () => {
    displayValue += "9"
    display();
})

addBtn.addEventListener('click', () => {
    console.log("Add two numbers");
    displayValue += " + ";
    operator = "+";
    storeNumber();
    display();
})

subtractBtn.addEventListener('click', () => {
    console.log("Subtract two numbers");
    displayValue += " - "
    operator = "-";
    storeNumber();
    display();
})

multiplyBtn.addEventListener('click', () => {
    console.log("Multiply two numbers");
    displayValue += " * ";
    operator = "*";
    storeNumber();
    display();
})

divisionBtn.addEventListener('click', () => {
    console.log("Divide two numbers");
    displayValue += " / ";
    operator = "/";
    storeNumber();
    display();
})

clearBtn.addEventListener('click', () => {
    result = 0;
    displayValue = "";
    displayTotal();
})

decimalBtn.addEventListener('click', () => {
    console.log("Place a decimal");
    displayValue += "."
    console.log(displayValue);
    display();
})

equalBtn.addEventListener('click', () => {
    
    //Allows the function values stored in storeNumber to be called 
    let storedNumbers = storeNumber();
    storedNumbers;
    let firstNumber = storedNumbers[0];
    let secondNumber = storedNumbers[1];

    operate(firstNumber, secondNumber, operator);
    displayTotal();
    displayValue = "";
})

//to run on click of any button and update the display
const display = function() {
    output.textContent = `${displayValue}`;
}

const displayTotal = function() {
    output.textContent = `${result}`;
}