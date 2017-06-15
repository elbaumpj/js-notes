// Lesson 2

// Operators and Control Structures

// 1. Operators
// JavaScript has math built into it!

// Example:

// Addition
var product = 5 * 5;

// Division

var quotient = 7 / 5;

// Addition

var sum = 2 + 2;

// Subtraction

var difference = 10 - 2;

// JavaScript also has decimals (floating point numbers) built into it. Warning: those often behave wierdly in programming languages.

// 1.1
// There's also a way to make comparisons in JavaScript. Those comparisons evaluate to true or false.
// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// != not equal to
// && AND
// || OR

//(7 < 8) // => true

// With AND both things have to be true for the whole statement to evaluate to true; otherwise it's false

//(7 < 8 && 6 < 7) // => true
//(7 < 8 && 5 > 7) // => false

// With OR, either can be true for the thing to evalue to true

//(7 < 8 || 6 > 7) // => true

// Not equal to...

//(7 != 4) // => true

// 2.0 - The DOM: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
// There are three ways to select a DOM
//1. Document.querySelectorAll()
//2. Document.getElementsByClassName() to select by class
//3. Document.getElementById() for IDs
// store these values in a variable:

var button = document.getElementById('btn');

// You can add "events" to DOM elements that can call a function when they are triggered
// See a full list of events here: https://developer.mozilla.org/en-US/docs/Web/Events
// Add an event with element.addEventListener(event, function)

function sayHi() {
  alert("hi!");
}

button.addEventListener('click', sayHi);

//along with events, you can target HTML as nodes in the DOM
// element.innerHTML;

//3.0 Async
// Foundational concept in JavaScript--you're dealing with browsers and requests!
// Timers in JS: https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Timers
// window.setTimeout(function, milliseconds)
// Can store the setTimeout in a variable
