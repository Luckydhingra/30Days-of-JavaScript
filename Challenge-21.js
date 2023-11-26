/*Challenge 21
Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
Solution Approach: Use async/await within a for...of loop.*/
async function asyncLoop(array, asyncFunction) {
    for (const element of array) {
      await asyncFunction(element);
    }
  }
    console.log(`Processing asynchronous operation`);
  // An asynchronous function that simulates an asynchronous operation
  async function asyncOperation(item) {
   // Simulating an asynchronous operation, e.g., fetching data
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Processed: ${item}`);
        resolve();
      }, 1000); // Simulating a 1-second delay
    });
  }
  
  // An array of items to be processed asynchronously
  const myArray = [5, 7 , -2, 4, 9, -1, 0, 3, -8, 12];
  
  // Sort the array in ascending order
  const sortedArray = myArray.slice().sort((a, b) => a - b);
  
  // Using the asyncLoop function to iterate over the sorted array and perform the async operation
  asyncLoop(sortedArray, asyncOperation)
    .then(() => {
      console.log("Async loop completed.");
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  