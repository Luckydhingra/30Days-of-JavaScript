﻿# 30Days-of-JavaScript
<!-- Day 1-->
## Challenge 1:
### Write a JavaScript function that reverses a number.
Sample Data and output:
Example: 
x = 32243;
Expected Output: 34223
<!-- day 2 -->
## Challenge 2
### Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '
<!-- day3 -->
## Challenge 3
### Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
<!-- day4 -->
## Challenge 4
### Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
<!-- day5 -->
## Challenge 5
### Write a JavaScript exercise to get the filename extension.
<!-- day-6 -->
## Challenge 6
### Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum
<!-- day-7 -->
## Challenge 7
### Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
<!-- day-8 -->
## Challenge 8
 ### Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], ]
<!-- day-9 -->
## Challenge 9
### Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
<!--day-10-->
## Challenge 10
### Write a JavaScript function to apply the Bubble Sort algorithm.
###### Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
<!-- day-12-->
## Challenge 11
### Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Sample Output: 
name,sclass,rollno
<!--day-12-->
 ## Challenge 12
 ### Write a JavaScript program to create a clock.
 Note: The output will come every second.

Expected Console Output:
"14:37:42"
"14:37:43"
 "14:37:44"
"14:37:45"
"14:37:46"
"14:37:47".
<!--day-13--> 
## Challenge 13
###  Write a function that takes a function as its argument and returns a memoized version of the function.
Problem Statement: Implement a memoization function.

Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
<!--day-14-->
## Challenge 14
### Write a JavaScript function to concatenate a given string n times (default is 1). Go to the editor
Test Data : -
console.log(repeat('Ha!'));

console.log(repeat('Ha!',2));

console.log(repeat('Ha!',3));

Outputs  : - 
"Ha!"

"Ha!Ha!"

"Ha!Ha!Ha! .
<!--day-15 -->
## Challenge 15
### Problem Description - Create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
Test Data :

console.log(string_chop('Scaler'));

console.log(string_chop('Scaler',2));

Outputs

["Scaler"]

['Sc' , 'al' ,'er']