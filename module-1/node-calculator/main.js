const readlineSync = require("readline-sync")


// Each function will have 2 parameters, num1, num2
// A function that adds two numbers and returns the result
function sum2Num(num1, num2) {
    return Number(num1) + Number(num2); // Had to add the 'Number' to the front of the variable for adding.  The other operations worked fine without it
}

// A function that multiplies two numbers and returns the result
function prod2Num(num1, num2) {
    return num1 * num2;
}

// A function that divides two numbers and returns the result
function div2Num(num1, num2) {
    return num1 / num2;
}

// A function that subtracts two numbers and returns the result
function diff2Num(num1, num2) {
    return num1 - num2;
}



// On the console the prompt will print to the user:
// Please enter your first number (store that number)
var num1 = readlineSync.question("Please enter your first number: ");

// Please enter your second number (store that number)
var num2 = readlineSync.question("Please enter your second number: ");

// Please enter the operation to perform: add, sub, mul, div (then store the operation)
var operation = readlineSync.question("Do you want to [1] add, [2] subtract, [3] multiply, or [4] divide? ");




var result = 0

// Based on the operation entered by the user, you will call one of your 4 
// functions to perform the correct operation
if (operation == "1" || operation == "add") {
    result = sum2Num(num1, num2); 
}
else if (operation == "2" || operation == "subtract") {
    result = diff2Num(num1, num2); 
}

else if (operation == "3" || operation == "multiply") {
    result = prod2Num(num1, num2); 
}

else if (operation == "4" || operation == "divide") {
    result = div2Num(num1, num2); 
}

// You will then print to the console: The result is: [the result]
console.log("The result is: " + result)



