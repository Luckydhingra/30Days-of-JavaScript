//Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.
// Challenge 29
// Description:
// Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.

 // My Solution:
 function raceWithTimeout(promises, timeout) {
    return new Promise((resolve, reject) => {
      // Use Promise.race to race between the original promises
      Promise.race(promises.map(promise =>
        promise.then(
          result => resolve(result), // resolve with the result if the promise resolves
          error => {} // ignore errors to prevent unhandled promise rejections
        )
      ));
  
      // Set a timeout to reject the main promise if none of the promises resolve within the given timeout
      setTimeout(() => {
        reject('Timeout!');
      }, timeout);
    });
  }
  
  console.log("Result will show after 1 second")
  raceWithTimeout([
    new Promise((resolve, reject) => setTimeout(() => resolve('Sclaer-30days-of-js'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject('error'), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('last'), 3000))
  ], 2000)
      .then(result => console.log(result))
    .catch(error => console.log(error));