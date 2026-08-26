// ================================
// DAY 02 — Array Methods
// Suba's Practice
// ================================
// Topics:
// 1. push()
// 2. forEach()
// 3. map()
// 4. filter()
// 5. find()
// ================================

// Products array — used across all methods below
const products = [
    { name: "Laptop",   price: 50000 },
    { name: "Mouse",    price: 1000  },
    { name: "Keyboard", price: 2000  }
];


// ================================
// 1. push()
// ================================
// Adds one or more items to the END of an array.
// Changes the original array.

const colors = ["red", "green"];
colors.push("blue");
console.log(colors); // ["red", "green", "blue"]

const students = ["Suba", "Prakash"];
students.push("Ram");
console.log(students); // ["Suba", "Prakash", "Ram"]


// ================================
// 2. forEach()
// ================================
// Loops through every item and runs a function for each.
// Does NOT return a new array.

const fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
// apple
// banana
// mango

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});

// forEach() with products
products.forEach(function(x) {
    console.log(x.name);
    console.log(x.price);
});


// ================================
// 3. map()
// ================================
// Loops through every item and returns a NEW array
// with transformed values. Original is NOT changed.

const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(function(num) {
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]

// map() with products — get only names
const productNames = products.map(function(x) {
    return x.name;
});

console.log(productNames); // ["Laptop", "Mouse", "Keyboard"]

// map() with products — get only prices
const productPrices = products.map(function(x) {
    return x.price;
});

console.log(productPrices); // [50000, 1000, 2000]


// ================================
// 4. filter()
// ================================
// Returns a NEW array with only items where
// the callback returns true.

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = allNumbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8]

// filter() with products — price less than 5000
const cheapProducts = products.filter(function(x) {
    return x.price < 5000;
});

console.log(cheapProducts);
// [{ name: "Mouse", price: 1000 }, { name: "Keyboard", price: 2000 }]

// filter() with products — price greater than 1000
const expensiveProducts = products.filter(function(x) {
    return x.price > 1000;
});

console.log(expensiveProducts);
// [{ name: "Laptop", price: 50000 }, { name: "Keyboard", price: 2000 }]


// ================================
// 5. find()
// ================================
// Returns the FIRST item that matches the condition.
// Stops as soon as it finds a match.
// Returns undefined if nothing matches.

const findNumbers = [5, 12, 8, 130, 44];

const firstBig = findNumbers.find(function(num) {
    return num > 10;
});

console.log(firstBig); // 12 ← stops at the FIRST match

// find() with products — find Mouse
const mouse = products.find(function(x) {
    return x.name === "Mouse";
});

console.log(mouse); // { name: "Mouse", price: 1000 }

// find() with products — find product with price 2000
const keyboard = products.find(function(x) {
    return x.price === 2000;
});

console.log(keyboard); // { name: "Keyboard", price: 2000 }
