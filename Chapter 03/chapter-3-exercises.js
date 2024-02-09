// Chapter 3 exercises

let prompt = require("prompt-sync")();

// Write a function with two parameters
const greeting = function(name, number1, number2){
    let sumup = number1 + number2;
    return name + "'s favourite number is " + sumup + ".";
}
console.log(greeting("Zhaozhi", 2, 6))

// Write a function with the function notation
function checknumbers(number) {
    if (number > 0) {
        return number + " is positive.";
    } else if (number == 0){
        return number + " equals to 0.";
    } else {
        return number + " is negative.";
    }
}
console.log(checknumbers(-1))

// Write a function with the => notation
const product = (number1, number2) => {
    if (isNaN(number1) || isNaN(number2)) {
        return "Please input valid numbers.";
    } else {
        let product = number1 * number2;
        return "The product of " + number1 + " and " + number2 + " is " + product + ".";
    }
}
console.log(product(12, 6))

// Write a function that preassigns a value to its second parameter
function product(number1, number2 = number1){
    let calcproduct = number1 * number2;
    if (number2 == number1){
        return "The square of " + number1 + " is " + calcproduct;
    } else {
        return "The product of " + number1 + " and " + number2 + " is " + calcproduct + ".";
    }
}
console.log(product(9, 2))

// Write a nested JavaScript function