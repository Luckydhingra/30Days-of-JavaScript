/*Challenge 13
Problem Statement: Implement a memoization function.

Description: Write a function that takes a function as its argument and returns a memoized version of the function.

Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.*/
function memoize(func) {
    const cache = new Map();
      return function (...args) {
      const key = JSON.stringify(args);
        if (cache.has(key)) {
                return cache.get(key);
      } 
      else {
        const result = func(...args);
        cache.set(key, result);
        return result;
      }
    };
  }
  
  // Example functions to be memoized
     function multiply(x, y) {
        console.log('Multiply Numbers..');
       
    return x * y;
  }
  
  // Memoized versions of the functions
  const memoizedMultiply = memoize(multiply);
  
  // Example usage:
  // Using memoizedMultiply
  console.log('Performing expensive calculation = ',  memoizedMultiply(4, 5)); // Calculated result, Performing expensive calculation, Result: 20
  console.log('Memoized result = ',memoizedMultiply(4, 5)); // Memoized result , Performing expensive calculation ,Result: 20
  console.log('Performing expensive calculation = ',memoizedMultiply(5, 5)); // Calculated result, Performing expensive calculation, Result: 25
  console.log('Performing expensive calculation = ',memoizedMultiply(6, 5)); // Calculated result, Performing expensive calculation, Result: 30