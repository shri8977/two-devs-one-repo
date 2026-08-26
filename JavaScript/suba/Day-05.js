// ================================
// DAY 05 — Callbacks & Promises
// Suba's Practice
// ================================
// Topics:
// 1. Callbacks
// 2. setTimeout()
// 3. Promises       ← CURRENTLY LEARNING
// 4. resolve()      ← CURRENTLY LEARNING
// 5. reject()       ← CURRENTLY LEARNING
// ================================


// ================================
// 1. CALLBACKS
// ================================
// A callback is a function passed as an argument
// to another function, to be called later.

function greetAndDo(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // call the function that was passed in
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
// Hello, Prakash!
// See you later!

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
// 2. setTimeout()
// ================================
// Runs a function ONCE after a delay (in milliseconds).
// 1000ms = 1 second
// JavaScript does NOT wait — it moves on immediately.

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

// setTimeout — 0ms still runs AFTER current code
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
// 3. PROMISES
// ================================
// CURRENTLY LEARNING

// A Promise represents a value available in the FUTURE.
// Three states:
//   Pending   → not done yet
//   Fulfilled → success (resolve)
//   Rejected  → failed  (reject)

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


// ================================
// 4. resolve()
// ================================
// CURRENTLY LEARNING

// resolve() is called when the operation SUCCEEDS.
// The value inside resolve() goes to .then()

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


// ================================
// 5. reject()
// ================================
// CURRENTLY LEARNING

// reject() is called when the operation FAILS.
// The value inside reject() goes to .catch()

checkAge(15)
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error); // Access denied ❌ — must be 18+
    });

// Promise with setTimeout — simulating a delay
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
