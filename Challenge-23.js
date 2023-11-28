/*Challenge 23
Problem : Closure Challenge
Description:
Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
Solution Approach:
Utilize closure to maintain the state of the counter*/
function counter(){
    var currentValue = 0;
   
     return function(val){
       currentValue += val;
       return currentValue;
     }  
   }
   console.log("create a counter")
   console.log("Increment counter  by 10")
   const a = counter()
   console.log(a(10))
   console.log(a(10))
   console.log(a(10))
   
   console.log("Increment counter  by  20")
   let b = counter()
   console.log(b(20))
   console.log(b(20))
   console.log(b(20))
   