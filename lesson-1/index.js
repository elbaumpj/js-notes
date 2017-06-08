// Programming is all about storing, retrieving and manipulating data.

// 1. Variables
// Variables are the foundation of "storing" data. You initialize them with the var keyword. They are like buckets!

var name = 'Peter';

// The convention in JavaScript is for variable names to be "camel cased" like so:

var myName = 'Peter';

// Most programming languages have the concept of types. In JavaScript, the main data types are string, boolean, number, null, and undefined.
// JavaScript has some weird behavior around null and undefined because it was created in a hurry in '95!

var string = 'Peter';

var number = 42;

var boolean = true;


// 2. Arrays
// Arrays are a data structure that allows you to capture values in the form of a list.

var myArray = [1, 32, 'Peter', false, true];

// 3. Loops
// Arrays are an example of what are called 'iterables.' You can "loop" through iterables one value a time. Example:

for(var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); //square brackets allow you to access the value at the specified index
}

// while loop:
var i = 0;
while(i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

// 4. Objects
// Objects allow you to store information in key-value pairs separated by commas.

var peter = {
  age: 25,
  location: "North Carolina",
  developer: true
}

//Print Peter's location

console.log(peter[location]); // => "North Carolina"

// 5. Functions
// Functions are reusable pieces of code. They allow you do execute that code by "calling" the function.
// Functions are initialized with the function keyword (until ES6...more on that later), name parameters in parentheses, and execute a block that's within curly brackets.
// The values passed into the function when you call it are called arguments, and the order must correspond with the listed parameters. 
// The keyword return allows you to extract values from a function.

function printName(myName) {
  console.log(myName);
}

// Call the function

printName("Peter"); // => "Peter"

// Function exercises
// 1. Write a function that prints the numbers 1-5.
// 2. Write a function that prints 'Yes' if the boolean passed is true and 'No' if false.
// 3. Write a function that reverses a string.
// 4. Write a function that returns the factorial of a number.
