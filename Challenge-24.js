/*Challenge 24
Description:
Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.
Solution Approach:
Use a timer and clear it on each invocation to delay the function execution.*/
function debounce(func, delay) {
    let timer = null;
  
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  function testfunc() {
    console.log( "Function called sucessfully",);
  }
  
  const debounced = debounce(testfunc, 500);
  
  console.log('Calling debounced test func three times...');
  for (let i = 0; i < 2; i++) {
    debounced(testfunc()); // The function will be called 3 times
  }
  setTimeout(() => {
    console.log('Calling debounced test func after 1 second...');
    debounced(); // The function will be called immediately after 1 second
  }, 1000);