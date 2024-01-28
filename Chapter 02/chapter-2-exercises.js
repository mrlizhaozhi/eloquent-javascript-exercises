// Eloquent JS: Chapter 2 exercises

// Additional lessons
/*
   1. Use " " to enclose the path to avoid errors when changing paths via the terminal window.
   2. Use Ctrl+K+C to comment out and Ctrl+K+U to uncomment in VS Code.
   3. Use Ctrl + C to stop an infinite loop. Always indent code blocks and include comments for readability.
   4. Review break; continue; switch; from Chapter 2.
*/

// Activate prompt-sync package to enable prompt() in Node.js
let prompt = require("prompt-sync")();

// If...Else...statements in jS
let pickNumber = Number(prompt("Pick a number: "));
if (!Number.isNaN(pickNumber)){
    if (pickNumber < 10) {
        console.log(pickNumber + " is smaller than 10.");
    } else if (pickNumber < 100){
        console.log(pickNumber + " is smaller than 100 but larger than 10.");
    } else {
        console.log(pickNumber + " is greater than 100.");
    }
} else {
    console.log("Please input a valid number.")
}

// while loops: press Ctrl+C to stop an infinite loop
let counter = 0
while (counter < 10){
    console.log(counter + " is smaller than 10");
    counter = counter + 1;
}

for loops
for (let counter = 0; counter < 20; counter = counter + 1){
    console.log(counter + " is smaller than 20.")
}

// do loops should always include a while condition
let inputNumber;
do {
    inputNumber = Number(prompt("Please input a number: "));
} while (inputNumber > 10) {
    console.log(inputNumber + " is smaller than 10.");
}

// Exercise 2.1: Looping a triangle
let hashtag = " ";
while (hashtag.length <= 7){
    hashtag += "#";
    console.log(hashtag);
}

// Exercise 2.2: The FizzBuzz Challenge
let i = 0;
while (i <= 100){
    if(i % 3 == 0 && i % 5 != 0){
        console.log(i + " is Fizz");
    } else if (i % 5 == 0 && i % 3 != 0){
        console.log(i + " is Buzz");
    } else if (i % 5 == 0 && i % 3 == 0){
        console.log(i + " is FizzBuzz");
    } else {
        console.log(i);
    }
    i += 1
}

// Exercise 2.3: Chessboard (need to review?)
let counter = 0;
let item = " ";
let size = 8;
while (counter < size){
    if (counter % 2 == 0){
        console.log(counter + " is an even number.");
    } else {
        console.log(counter + " is an odd number.");
    }
    counter += 1;
}