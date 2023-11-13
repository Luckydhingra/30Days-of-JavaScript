//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function Checknumber50(a, b) 
{
  return a == 50 || b == 50 || a + b == 50;
}
console.log(Checknumber50(50, 50));  // true (because 50 is one of the numbers)
console.log(Checknumber50(30, 20));  // true (because their sum is 50)
console.log(Checknumber50(10, 50));  // true (because 50 is one of the numbers)
console.log(Checknumber50(10, 10));  // false (neither number is 50, and their sum is not 50)git 