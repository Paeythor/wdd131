// Declare a constant variable for the current year
const currentYear = new Date().getFullYear();
console.log(currentYear);  // Outputs the current year

// Declare a variable using let that can be reassigned
let isLoggedIn = false;
console.log(isLoggedIn);  // Outputs: false

// Reassign the isLoggedIn variable
isLoggedIn = true;
console.log(isLoggedIn);  // Outputs: true

// Define a string using single quotes
let greeting = 'Hello, World!';
console.log(greeting);  // Outputs: Hello, World!

// Define a string using double quotes
let message = "Welcome to JavaScript!";
console.log(message);  // Outputs: Welcome to JavaScript!

// Use template literals to create a string with embedded expressions
let name = 'Alicia';
let age = 25;
let introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction);  // Outputs: My name is Alicia and I am 25 years old.

// Declare a number and check its type
let number = 101;
console.log(typeof number);  // Outputs: number

// Declare a boolean and check its type
let isActive = true;
console.log(typeof isActive);  // Outputs: boolean

// Declare a null value and check its type
let emptyValue = null;
console.log(typeof emptyValue);  // Outputs: object (this is a known quirk in JavaScript)

// Declare an undefined value and check its type
let notAssigned;
console.log(typeof notAssigned);  // Outputs: undefined

// Code comments
// This is a simple comment

/*
  This is a multi-line comment
  that spans more than one line
*/

// Modify a variable using let
let myAge = 30;
myAge = 31;  // Reassigned the value of myAge
console.log(myAge);  // Outputs: 31