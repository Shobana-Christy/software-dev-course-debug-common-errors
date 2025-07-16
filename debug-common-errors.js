/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");

// What’s Wrong?
// Syntax error - The string inside is not wrapped in double quotes and the parentheses is missing at the end.


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
console.log( typeof numbers [2]);

// What’s Wrong?
// Runtime Error - the value inside the array is string 'NaN' which cannot perform with arithmetic operators.
//if this is changed to number, this code will run smoothly.


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// Solution 1
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      if(num === i) {
        return true; 
      } else {
        return false;
      }
    }
  }
  return false; 
}

const num = 7;
let result = isPrime(num);
if(result) {
  result = "";
} else {
  result = "NOT";
}

console.log("The number " + num + " is " + result + " a Prime number" ); 
// What’s Wrong?
// It's logical error. Missing few conditions.


