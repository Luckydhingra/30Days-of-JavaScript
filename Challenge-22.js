/*Challenge 22
Problem Statement: Write a function to deeply compare two objects for equality.
Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
Solution Approach: Recursively compare properties of both objects.*/
const A = {
    citiesLivedIn: ["ROHTAK", "JHAJJAR", "SONIPAT, PANIPAT"],
}
const B = {
   citiesLivedIn: ["ROHTAK", "JHAJJAR", "SONIPAT, PANIPAT"],
}
const C ={
    citiesLivedIn: ["DELHI", "DWAKRA", "NOIDA", ],
}
const D = {
     citiesLivedIn: ["DELHI", "DWAKRA", "NOIDA", ],
}
function deepComparison (x, y) {
  if(x === y) return true
  if(x === null || y === null) return false
  if(typeof x !== 'object'  || typeof y !== 'object') return false
  let first_keys = Object.getOwnPropertyNames(x)
  let second_keys = Object.getOwnPropertyNames(y)
  if(first_keys.length !== second_keys.length) return false
  for(let key of first_keys) {
      if(!Object.hasOwn(y, key)) return false
      if (deepComparison(x[key], y[key]) === false) return false
  }
  return true
}
console.log(deepComparison(A,B)) //true
console.log(deepComparison(A,C))//false
console.log(deepComparison(B,C))//false
console.log(deepComparison(C,D))//true