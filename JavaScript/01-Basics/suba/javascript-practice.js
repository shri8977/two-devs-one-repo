// ================================
// SUBA'S JAVASCRIPT PRACTICE
// 01 - Basics
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
// 2. PARAMETERS AND ARGUMENTS
// ================================

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Suba");
greetUser("Prakash");

function greetWithAge(name, age) {
    console.log("Hello, " + name + "! You are " + age + " years old.");
}

greetWithAge("Suba", 25);


// ================================
// 3. RETURN
// ================================

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
// 4. ARRAYS
// ================================

const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
console.log(fruits.length); // 3

const numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]); // 10
console.log(numbers.length); // 5


// ================================
// 5. push()
// ================================

const colors = ["red", "green"];
colors.push("blue");
console.log(colors); // ["red", "green", "blue"]

const students = ["Suba", "Prakash"];
students.push("Ram");
console.log(students); // ["Suba", "Prakash", "Ram"]


// ================================
// 6. forEach()
// ================================

const fruitsForEach = ["apple", "banana", "mango"];

fruitsForEach.forEach(function(fruit) {
    console.log(fruit);
});
// apple
// banana
// mango

const numbersForEach = [1, 2, 3, 4, 5];

numbersForEach.forEach(function(num) {
    console.log(num * 2);
});

// With products
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

products.forEach(function(x) {
    console.log(x.name);
    console.log(x.price);
});


// ================================
// 7. map()
// ================================

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
// 8. filter()
// ================================

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
// 9. find()
// ================================

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


// ================================
// 10. OBJECTS
// ================================

const person = {
    name: "Suba",
    age: 25,
    city: "Chennai"
};

console.log(person.name);  // Suba
console.log(person.age);   // 25
console.log(person.city);  // Chennai

// Adding a new property
person.email = "suba@example.com";
console.log(person.email);

// Updating a property
person.age = 26;
console.log(person.age); // 26


// ================================
// 11. ARRAYS OF OBJECTS
// ================================

const students2 = [
    { name: "Suba",    grade: 90 },
    { name: "Prakash", grade: 85 },
    { name: "Ram",     grade: 78 }
];

// Access by index
console.log(students2[0].name);  // Suba
console.log(students2[1].grade); // 85

// Loop through all
students2.forEach(function(student) {
    console.log(student.name + " scored " + student.grade);
});

// Filter students who passed (grade >= 80)
const passed = students2.filter(function(student) {
    return student.grade >= 80;
});

console.log(passed);
// [{ name: "Suba", grade: 90 }, { name: "Prakash", grade: 85 }]


// ================================
// 12. OBJECT PROPERTY ACCESS
// ================================

const laptop = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

// Dot notation
console.log(laptop.name);  // Laptop
console.log(laptop.price); // 50000
console.log(laptop.brand); // Dell

// Bracket notation
console.log(laptop["name"]);  // Laptop
console.log(laptop["price"]); // 50000


// ================================
// 13. OBJECT DESTRUCTURING
// ================================

const user = {
    name: "Suba",
    age: 25,
    city: "Chennai"
};

// Without destructuring
// const name = user.name;
// const age = user.age;

// With destructuring
const { name, age, city } = user;
console.log(name); // Suba
console.log(age);  // 25
console.log(city); // Chennai

// Destructuring with default value
const { name: userName, country = "India" } = user;
console.log(userName); // Suba
console.log(country);  // India ← default used because user has no country

// Destructuring inside forEach
products.forEach(function({ name, price }) {
    console.log(name + " costs " + price);
});


// ================================
// 14. ARRAY DESTRUCTURING
// ================================

const fruitsList = ["apple", "banana", "mango"];

const [first, second, third] = fruitsList;
console.log(first);  // apple
console.log(second); // banana
console.log(third);  // mango

// Skip items
const [, , lastFruit] = fruitsList;
console.log(lastFruit); // mango

// Swap variables using array destructuring
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1


// ================================
// 15. SPREAD OPERATOR
// ================================

// Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy an array
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
// 16. REST OPERATOR
// ================================

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

// Rest with first parameter
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
// 17. TEMPLATE LITERALS
// ================================

const myName = "Suba";
const myAge = 25;

// Old way
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
// 18. USER INPUT — prompt() / input.value
// ================================

// prompt() — works in the browser
// const userName2 = prompt("What is your name?");
// console.log(`Hello, ${userName2}!`);

// const ageInput = prompt("How old are you?");
// const userAge = Number(ageInput);
// console.log(`You are ${userAge} years old.`);

// input.value — getting value from an HTML input field
// const inputBox = document.getElementById("nameInput");
// const enteredName = inputBox.value;
// console.log(`You typed: ${enteredName}`);

// NOTE: prompt() and input.value only work in the browser.
// They are commented out here so this file runs in Node.js too.
// Uncomment them when practicing in an HTML file.


// ================================
// 19. CALLBACKS
// ================================

// A callback is a function passed as an argument to another function

function greetAndDo(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greetAndDo("Suba", sayBye);
// Hello, Suba!
// Goodbye!

// Inline (anonymous) callback
greetAndDo("Prakash", function() {
    console.log("See you later!");
});

// Callback with a value
function doMath(a, b, operation) {
    return operation(a, b);
}

function addNums(a, b) {
    return a + b;
}

function multiplyNums(a, b) {
    return a * b;
}

console.log(doMath(3, 4, addNums));      // 7
console.log(doMath(3, 4, multiplyNums)); // 12

// forEach, map, filter all use callbacks
const myNumbers = [1, 2, 3];
myNumbers.forEach(function(num) { // ← this IS a callback
    console.log(num);
});


// ================================
// 20. setTimeout()
// ================================

console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output order:
// Start
// End
// This runs after 2 seconds ← appears 2 seconds later

// setTimeout with a named function
function showMessage() {
    console.log("Hello after 1 second!");
}

setTimeout(showMessage, 1000);

// setTimeout — 0ms still runs after current code
console.log("Before timeout");

setTimeout(function() {
    console.log("Inside timeout");
}, 0);

console.log("After timeout");

// Output:
// Before timeout
// After timeout
// Inside timeout ← even 0ms runs after current code finishes


// ================================
// 21. PROMISES
// ================================
// CURRENTLY LEARNING

// A Promise represents a value that will be available in the future
// Three states: Pending → Fulfilled (resolve) or Rejected (reject)

// Basic Promise
const myPromise = new Promise(function(resolve, reject) {
    const success = true;

    if (success) {
        resolve("It worked! ✅");
    } else {
        reject("Something went wrong ❌");
    }
});

myPromise
    .then(function(result) {
        console.log(result); // It worked! ✅
    })
    .catch(function(error) {
        console.log(error);
    });

// Promise with a real-world-style example
function checkAge(age) {
    return new Promise(function(resolve, reject) {
        if (age >= 18) {
            resolve("Access granted ✅");
        } else {
            reject("Access denied ❌ — must be 18+");
        }
    });
}

checkAge(20)
    .then(function(message) {
        console.log(message); // Access granted ✅
    })
    .catch(function(error) {
        console.log(error);
    });

checkAge(15)
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error); // Access denied ❌ — must be 18+
    });

// Promise with setTimeout (simulating a delay like fetching data)
function waitAndGreet(name) {
    return new Promise(function(resolve, reject) {
        if (name) {
            setTimeout(function() {
                resolve("Hello, " + name + "! (after 1 second)");
            }, 1000);
        } else {
            reject("No name provided ❌");
        }
    });
}

waitAndGreet("Suba")
    .then(function(message) {
        console.log(message); // Hello, Suba! (after 1 second)
    })
    .catch(function(error) {
        console.log(error);
    });

waitAndGreet("")
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error); // No name provided ❌
    });
