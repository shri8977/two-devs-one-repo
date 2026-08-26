// ================================
// DAY 04 — Spread, Rest, Literals & Input
// Suba's Practice
// ================================
// Topics:
// 1. Spread Operator
// 2. Rest Operator
// 3. Template Literals
// 4. User Input
// 5. prompt()
// ================================


// ================================
// 1. SPREAD OPERATOR
// ================================
// Spreads (expands) an array or object into individual items.

// Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy an array (without linking to the original)
const originalFruits = ["apple", "banana"];
const copiedFruits = [...originalFruits];
copiedFruits.push("mango");

console.log(originalFruits); // ["apple", "banana"] ← unchanged
console.log(copiedFruits);   // ["apple", "banana", "mango"]

// Merge objects
const obj1 = { name: "Suba", age: 25 };
const obj2 = { city: "Chennai", country: "India" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// { name: "Suba", age: 25, city: "Chennai", country: "India" }

// Spread into a function
function addThree(a, b, c) {
    return a + b + c;
}
const values = [1, 2, 3];
console.log(addThree(...values)); // 6


// ================================
// 2. REST OPERATOR
// ================================
// Collects multiple values into a single array.
// Must always be the LAST parameter.

// Rest in function parameters
function sum(...numbers) {
    let total = 0;
    numbers.forEach(function(num) {
        total += num;
    });
    return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100

// Rest with a first parameter
function greetAndLog(greeting, ...names) {
    names.forEach(function(name) {
        console.log(greeting + ", " + name + "!");
    });
}

greetAndLog("Hello", "Suba", "Prakash", "Ram");
// Hello, Suba!
// Hello, Prakash!
// Hello, Ram!

// Rest in array destructuring
const [firstNum, ...restNums] = [1, 2, 3, 4, 5];
console.log(firstNum); // 1
console.log(restNums); // [2, 3, 4, 5]


// ================================
// 3. TEMPLATE LITERALS
// ================================
// Embed variables and expressions directly in a string.
// Use backticks ` ` and ${ }.

const myName = "Suba";
const myAge = 25;

// Old way (concatenation)
console.log("Hello, my name is " + myName + " and I am " + myAge + " years old.");

// Template literal
console.log(`Hello, my name is ${myName} and I am ${myAge} years old.`);

// Expression inside ${}
const a = 10;
const b = 5;
console.log(`${a} + ${b} = ${a + b}`);       // 10 + 5 = 15
console.log(`Is ${a} even? ${a % 2 === 0}`); // Is 10 even? true

// Template literal with object
const product = { name: "Laptop", price: 50000 };
console.log(`Product: ${product.name}, Price: ${product.price}`);

// Multi-line string
const message = `Hello Suba,
Welcome to JavaScript!
Keep practicing.`;
console.log(message);


// ================================
// 4. USER INPUT
// ================================
// Getting input from the user in the browser.
// Two ways: prompt() and input.value

// input.value — reading from an HTML input field
// const inputBox = document.getElementById("nameInput");
// const enteredName = inputBox.value;
// console.log(`You typed: ${enteredName}`);

// NOTE: input.value only works in the browser with an HTML file.
// Uncomment when practicing in an HTML file.


// ================================
// 5. prompt()
// ================================
// Opens a browser dialog asking the user to type something.
// Always returns a STRING (or null if cancelled).

// const userName = prompt("What is your name?");
// console.log(`Hello, ${userName}!`);

// const ageInput = prompt("How old are you?");
// const userAge = Number(ageInput); // convert string → number
// console.log(`You are ${userAge} years old.`);

// NOTE: prompt() only works in the browser — NOT in Node.js.
// Uncomment when practicing in an HTML file.
