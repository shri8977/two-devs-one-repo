// ================================
// DAY 01 — JavaScript Basics
// Suba's Practice
// ================================
// Topics:
// 1. Functions
// 2. Parameters
// 3. Arguments
// 4. return
// 5. Arrays
// ================================


// ================================
// 1. FUNCTIONS
// ================================

function greet() {
    console.log("Hello, World!");
}

greet();

function sayName() {
    console.log("My name is Suba");
}

sayName();


// ================================
// 2. PARAMETERS
// ================================
// Parameters are placeholders in the function definition.

function greetUser(name) {          // 'name' is the parameter
    console.log("Hello, " + name + "!");
}

function greetWithAge(name, age) {  // 'name' and 'age' are parameters
    console.log("Hello, " + name + "! You are " + age + " years old.");
}


// ================================
// 3. ARGUMENTS
// ================================
// Arguments are the real values you pass when calling the function.

greetUser("Suba");       // "Suba" is the argument
greetUser("Prakash");    // "Prakash" is the argument

greetWithAge("Suba", 25); // "Suba" and 25 are the arguments


// ================================
// 4. return
// ================================
// return sends a value back to whoever called the function.

function add(a, b) {
    return a + b;
}

console.log(add(3, 5));   // 8
console.log(add(10, 20)); // 30

function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // 20


// ================================
// 5. ARRAYS
// ================================
// An array is an ordered list of values.
// Index starts at 0.

const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
console.log(fruits.length); // 3

const numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);    // 10
console.log(numbers.length); // 5
