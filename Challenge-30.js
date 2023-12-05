/*Description:
Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
Solution Approach:
Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.
*/

//Solution
function throttle(func, interval) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime < interval) {
            return;
        }
        lastTime = now;
        return func.apply(this, args);
    };
}

invocationCount = 0;
function doSomething() {
 
    console.log("Throttle Function : ", ++invocationCount);
    console.log('at', Date(), "\n");
}

const throttleDoSomething = throttle(doSomething, 3000);
throttleDoSomething();
throttleDoSomething();
throttleDoSomething();
setTimeout(throttleDoSomething, 3000);