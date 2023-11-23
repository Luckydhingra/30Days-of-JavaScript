/*Challenge 18
Problem Description:
Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.
Inputs:
An array of numbers.
Outputs:
An array of numbers where each number is doubled.
Hints:
The map() method creates a new array with the results of calling a function for every array element.
 */
function Doublevalue(arr) {
    const doubledArr = arr.map(num => num * 2);
    return doubledArr;
}
const arr = [15,16,17,18]; //output : [30,32,34,36]
console.log(Doublevalue(arr));