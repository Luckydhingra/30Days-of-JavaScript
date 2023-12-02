/*Challenge 26
Description:
Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
Solution Approach:
Combine map, filter, and reduce array methods.*/
function calculateTotal(numbers) {
    // Use filter to exclude even numbers
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
  
    // Use map to square the remaining numbers
    const squaredNumbers = oddNumbers.map(number => number * number);
  
    // Use reduce to calculate the sum of squared numbers
    const total = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
  
    return total;
  }
  
  // Example usage:
  const numbers = [12, 22, 33, 40, 50, 60, 70, 80, 90, 100];
  const result = calculateTotal(numbers);
    console.log(result); // Output: 165
  