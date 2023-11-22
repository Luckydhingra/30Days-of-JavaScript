/*Challenge 17
Problem Description:Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.
Inputs:
An array of numbers.
Outputs:
An array of numbers without odd numbers.
Hints:Use the filter() method to create a new array with all elements that pass the test implemented by the provided function.
Solution Approach:Use the filter() method and provide a callback that checks if the number is even.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function filterOutOdd(arr) {
    const filteredArr = arr.filter(num => num % 2 === 0);
    return filteredArr;
}

function main() {
    rl.question("Enter the length of the array: ", (num) => {
        const arr1 = [];

        (function promptUser(i) {
            if (i < num) {
                rl.question(`Enter Number ${i + 1}: `, (number) => {
                    arr1.push(parseInt(number));
                    promptUser(i + 1);
                });
            } else {
                rl.close();
                const ans = filterOutOdd(arr1);
                console.log("Filtered Array (keeping only even numbers):", ans);
            }
        })(0);
    });
}

main();
