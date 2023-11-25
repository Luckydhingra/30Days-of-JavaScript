/*Challenge 20
Problem Description:
Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
Inputs:
An array of numbers.
Outputs:
A number representing the first negative number in the array or undefined if there are no negative numbers.
Hints:
The find() method returns the value of the first element in the array that satisfies the provided testing function.
Solution Approach:
Use the find() method and provide a callback that checks if the number is negative.*/
function findFirstNegative(num){
    let negative = num.find(num => num < 0);
    if (negative === undefined){
        return "No negative numbers found!";
    } else {
        return negative;
    }
}
const prompt = require('prompt-sync')();
let userInput = prompt("Enter a comma-separated list of numbers: "); // Get user input for the array
let userArray = userInput.split(",").map(Number);
console.log();
console.log(findFirstNegative(userArray));
