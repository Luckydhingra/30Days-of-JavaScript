/*Challenge 19
Problem Description:
Write a JavaScript function named allPositive that checks whether all numbers in a given array are positive using the every() method.
Inputs:
An array of numbers.
Outputs:
A boolean value. Return true if all numbers are positive, otherwise false.
Hints:
The every() method tests whether all elements in the array pass the test implemented by the provided function.
Solution Approach:
Use the every() method and provide a callback that checks if the number is positive.*/
function allPositive(arr) {
    return arr.every(number => number > 0);
}
const prompt = require('prompt-sync')();
let userInput = prompt("Enter a comma-separated list of numbers: "); // Get user input for the array
let userArray = userInput.split(",").map(Number);
console.log();
console.log("Entered Array:", userArray);
console.log();
console.log("All Positive:", allPositive(userArray));
