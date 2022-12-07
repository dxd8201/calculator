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
let storedNumber = "";
let storedNumber1 = "";
let storedNumber2 = "";
let operator = "";
let result = 0;

zero.addEventListener('click', () => {
    displayValue += "0";
    storeNumber();
    display();
})

one.addEventListener('click', () => {
    displayValue += "1";
    storeNumber();
    display();
})

two.addEventListener('click', () => {
    displayValue += "2";
    storeNumber();
    display();
})

three.addEventListener('click', () => {
    displayValue += "3";
    storeNumber();
    display();
})

four.addEventListener('click', () => {
    displayValue += "4";
    storeNumber();
    display();
})

five.addEventListener('click', () => {
    displayValue += "5";
    storeNumber();
    display();
})

six.addEventListener('click', () => {
    displayValue += "6";
    storeNumber();
    display();
})

seven.addEventListener('click', () => {
    displayValue += "7";
    storeNumber();
    display();
})

eight.addEventListener('click', () => {
    displayValue += "8";
    storeNumber();
    display();
})

nine.addEventListener('click', () => {
    displayValue += "9";
    storeNumber();
    display();
})

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

        
        // storedNumber = displayValue.replace(/^\D.+/g, '');

        // if (storedNumber.includes(/\D/g)) {
        //     console.log("storedNumber held an operator");
        //     storedNumber = "";
        // }
        // const [storedNumber1, storedNumber2] = displayValue.split(/\W{3}(.+)/g);
        console.log(displayValue);
        storedArray = displayValue.split(/\W{3}/g);
        console.log(`StoredArray is ${storedArray}`);
        
        //grabs final number of storedArray
        storedNumber = storedArray.slice(-1)[0];
        console.log(`Stored Number is ${storedNumber}`);
        console.log(`Result is ${result}`);

        return storedNumber;

    //Store using an array to return multiple values
}

const clearNumber = function() {
    storedNumber = "";
    console.log(`storedNumber is ${storedNumber}`);
    return
}

const operate = function(num1, num2, operator) {

    if (num2 === null) {
        console.log("num2 is null");
        console.log(displayValue);
        return result;
    } else if (operator === "+") {
       result = add(num1, num2);
       console.log(result);
       return result
    } else if (operator === "-") {
        result = subtract(num1, num2);
        console.log(result);
        return result
    } else if (operator === "*") {
        result = multiply(num1, num2);
        console.log("multiply");
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

//Should update storeNumber to blank when an operator is pressed
//need to get operate to run when plus button is clicked, and then clear the storedNumber after

addBtn.addEventListener('click', () => {
    if (operator !== "+" && operator !== "") {
        operate(result, storedNumber, operator);
        displayValue += " + ";
        operator = "+";
        display();
        return
    }
    
    displayValue += " + ";
    operator = "+";

    if (storedNumber === "") {
        storedNumber = storedArray.slice(-2)[0];
        console.log(`2nd to last storedNumber is ${storedNumber}`);
        display();
        console.log(result);
        return console.log("Stored Number is NaN")
    } else {
        console.log("Add two numbers");
        operate(result, storedNumber, operator);
        display();
        console.log(result);
    }

    storeNumber();
})

subtractBtn.addEventListener('click', () => {
    if (operator !== "-" && operator !== "") {
        operate(result, storedNumber, operator);
        displayValue += " - "
        operator = "-";
        display();
        return
    }
    
    displayValue += " - "
    operator = "-";
    console.log("Subtract two numbers");
    
    if (result === 0) {
        result = storedNumber;
        console.log("Result is the same as storedNumber");
        return
    }

    if (storedNumber === "") {
        storedNumber = storedArray.slice(-2)[0];
        console.log(`2nd to last storedNumber is ${storedNumber}`);
        display();
        console.log(result);
        return console.log("Stored Number is NaN")
    } else {
        console.log("subtract two numbers");
        operate(result, storedNumber, operator);
        display();
        console.log(result);
    }

    storeNumber();
    console.log(`result is ${result}`);
})

multiplyBtn.addEventListener('click', () => {
    if (operator !== "*" && operator !== "") {
        operate(result, storedNumber, operator);
        displayValue += " * "
        operator = "*";
        display();
        return
    }
    
    displayValue += " * ";
    operator = "*";
    console.log("Multiply two numbers");

    if (result === 0 && storedNumber.length >= 1) {
        result = 1;
    }

    if (storedNumber === "") {
        storedNumber = storedArray.slice(-2)[0];
        console.log(`2nd to last storedNumber is ${storedNumber}`);
        display();
        console.log(result);
        return console.log("Stored Number is NaN")
    } else {
        console.log("multiply two numbers");
        operate(result, storedNumber, operator);
        display();
        console.log(result);
    }
    
    
    storeNumber();
    console.log(`result is ${result}`);
})

divisionBtn.addEventListener('click', () => {
    if (operator !== "/" && operator !== "") {
        operate(result, storedNumber, operator);
        displayValue += " / "
        operator = "/";
        display();
        return
    }
    
    displayValue += " / ";
    operator = "/";
    console.log("Divide two numbers");
    
    if (result === 0 && storedNumber.length >= 1) {
        result = storedNumber;
        return
    }

    if (storedNumber === "") {
        storedNumber = storedArray.slice(-2)[0];
        console.log(`2nd to last storedNumber is ${storedNumber}`);
        display();
        console.log(result);
        return console.log("Stored Number is NaN")
    } else {
        console.log("divide two numbers");
        operate(result, storedNumber, operator);
        display();
        console.log(result);
    }


    storeNumber();
    console.log(result);
})

clearBtn.addEventListener('click', () => {
    result = 0;
    displayValue = "";
    operator = "";
    displayTotal();
})

decimalBtn.addEventListener('click', () => {
    console.log("Place a decimal");
    console.log(result);
    displayValue += "."
    console.log(displayValue);
    display();
})

equalBtn.addEventListener('click', () => {
    console.log(storedArray);
    //Allows the function values stored in storeNumber to be called 
    // let storedNumbers = storeNumber();
    // storedNumbers;
    // let firstNumber = storedNumbers[0];
    // let secondNumber = storedNumbers[1];

    operate(result, storedNumber, operator);
    displayTotal();
    storedNumber = "";
    displayValue = "";
})

//to run on click of any button and update the display
const display = function() {
    output.textContent = `${displayValue}`;
}

const displayTotal = function() {
    console.log(result);
    if (isNaN(result)) {
        output.textContent = "Error";
    } else {
        output.textContent = `${result}`;
    }
    
}