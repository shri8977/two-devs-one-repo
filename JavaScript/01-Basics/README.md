<p align="center">
  <img src="../../banner.png" alt="Two Devs One Repo Banner" width="100%">
</p>

<h1 align="center">📘 JavaScript — 01 Basics</h1>

<p align="center">
  <b>Learn Together • Practice Individually • Grow Together</b>
</p>

---

> 📚 **Shared documentation** for Suba & Prakash.  
> Practice files live in `suba/` and `prakash/` — keep to your own folder.

---

## 📋 Table of Contents

1. [Functions](#1-functions)
2. [Parameters & Arguments](#2-parameters--arguments)
3. [Arrays](#3-arrays)
4. [Array Methods](#4-array-methods) — push · forEach · map · filter · find
5. [Objects](#5-objects)
6. [Arrays of Objects](#6-arrays-of-objects)
7. [Destructuring](#7-destructuring)
8. [Spread & Rest Operators](#8-spread--rest-operators)
9. [Template Literals](#9-template-literals)
10. [User Input — prompt()](#10-user-input--prompt)
11. [Callbacks](#11-callbacks)
12. [setTimeout()](#12-settimeout)
13. [Promises](#13-promises)
14. [Learning Status](#-learning-status)
15. [How We Work Together](#-how-we-work-together)

---

## 1. Functions

A **function** is a reusable block of code that performs a specific task.
Define it once, call it as many times as you need.

### Syntax

```js
// Declaration
function functionName() {
  // code to run
}

// Call it
functionName();
```

### Example

```js
function greet() {
  console.log("Hello, World!");
}

greet(); // Hello, World!
greet(); // Hello, World!  ← call it again any time
```

### Arrow Function (shorter syntax)

```js
const greet = () => {
  console.log("Hello, World!");
};

greet();
```

### ⚠️ Important Points

- A function does **nothing** until you **call** it.
- Name functions with verbs that describe what they do: `greet`, `calculate`, `fetchData`.
- Arrow functions (`=>`) and regular functions work the same way for most basic use cases.

---

## 2. Parameters & Arguments

**Parameters** are placeholders you write when defining a function.  
**Arguments** are the real values you pass when calling it.

### Syntax

```js
function functionName(parameter1, parameter2) {
  // use parameter1 and parameter2 here
}

functionName(argument1, argument2);
```

### Example

```js
function greet(name) {        // 'name' is the parameter
  console.log("Hello, " + name + "!");
}

greet("Suba");    // 'Suba' is the argument → Hello, Suba!
greet("Prakash"); // → Hello, Prakash!
```

### Multiple Parameters & Return

```js
function add(a, b) {
  return a + b;   // sends the result back to the caller
}

console.log(add(3, 5)); // 8
```

### Default Parameters

```js
function greet(name = "Friend") {
  console.log("Hello, " + name + "!");
}

greet();        // Hello, Friend!
greet("Suba");  // Hello, Suba!
```

### ⚠️ Important Points

- **Parameter** = variable in the function definition.
- **Argument** = actual value passed when calling.
- `return` sends a value back — without it the function returns `undefined`.
- If no argument is passed, the parameter is `undefined` (unless a default is set).

---

## 3. Arrays

An **array** is an ordered list of values stored in one variable.
Items are accessed by their **index**, starting at `0`.

### Syntax

```js
const arrayName = [value1, value2, value3];
```

### Example

```js
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
console.log(fruits.length); // 3
```

### Arrays can hold any type

```js
const mixed = [42, "hello", true, null];
```

### ⚠️ Important Points

- Index starts at **0**, not 1.
- `array.length` gives the total number of items.
- Arrays are **mutable** — you can change their contents after creation.

---

## 4. Array Methods

### 4a. push()

Adds one or more items to the **end** of an array. Changes the original array.

```js
const fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "mango"]
```

---

### 4b. forEach()

Loops through every item and runs a function for each. Returns `undefined` — use it for side effects like logging.

```js
const fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
// apple
// banana
// mango
```

---

### 4c. map()

Loops through every item and **returns a new array** with transformed values. The original array is NOT changed.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);  // [2, 4, 6, 8]
console.log(numbers);  // [1, 2, 3, 4]  ← original unchanged
```

---

### 4d. filter()

Loops through every item and **returns a new array** with only items where the callback returns `true`.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens); // [2, 4, 6]
```

---

### 4e. find()

Returns the **first item** that matches the condition. Returns `undefined` if nothing matches. Stops as soon as it finds a match.

```js
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(function(num) {
  return num > 10;
});

console.log(found); // 12  ← stops at the FIRST match
```

---

### 🔍 Comparison Table

| | `forEach()` | `map()` | `filter()` | `find()` |
|---|---|---|---|---|
| **Returns** | `undefined` | New array | New array | Single item or `undefined` |
| **Purpose** | Side effects (log, update UI) | Transform every item | Keep items that match | Find one specific item |
| **Original array changed?** | No | No | No | No |
| **Stops early?** | No | No | No | ✅ Yes — first match |
| **Use when you want to…** | Do something for each item | Convert all items | Get a subset of items | Find one item |

#### Quick comparison — same array, four methods

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n));              // prints each — no return value
const doubled  = numbers.map(n => n * 2);          // [2, 4, 6, 8, 10]
const evens    = numbers.filter(n => n % 2 === 0); // [2, 4]
const firstBig = numbers.find(n => n > 3);         // 4
```

---

## 5. Objects

An **object** groups related data as **key–value pairs**.

### Syntax

```js
const objectName = {
  key1: value1,
  key2: value2,
};
```

### Example

```js
const person = {
  name: "Suba",
  age: 25,
  city: "Chennai",
};

// Dot notation
console.log(person.name); // Suba
console.log(person.age);  // 25

// Bracket notation
console.log(person["city"]); // Chennai
```

### Adding / Updating Properties

```js
person.email = "suba@example.com"; // add new property
person.age = 26;                   // update existing property
```

### ⚠️ Important Points

- Keys are always strings (or Symbols). Values can be any type.
- Use **dot notation** (`obj.key`) for known property names.
- Use **bracket notation** (`obj["key"]`) when the key is dynamic.

---

## 6. Arrays of Objects

The most common real-world JavaScript pattern — a list of objects (users, products, orders, etc.).

### Example

```js
const students = [
  { name: "Suba",    grade: 90 },
  { name: "Prakash", grade: 85 },
  { name: "Ram",     grade: 78 },
];

// Access one student's name
console.log(students[0].name); // Suba

// Loop through all
students.forEach(function(student) {
  console.log(student.name + " scored " + student.grade);
});

// Filter students who passed (grade >= 80)
const passed = students.filter(function(student) {
  return student.grade >= 80;
});
// [{name:"Suba",...}, {name:"Prakash",...}]
```

### ⚠️ Important Points

- Combine `map`, `filter`, `find` with arrays of objects — it's extremely powerful.
- Access properties with `.` inside the callback: `student.name`.

---

## 7. Destructuring

A shorthand way to unpack values from arrays or objects into separate variables.

---

### 7a. Object Destructuring

```js
const person = { name: "Suba", age: 25 };

// Without destructuring
const name = person.name;
const age  = person.age;

// With destructuring
const { name, age } = person;
console.log(name); // Suba
console.log(age);  // 25
```

#### Rename while destructuring

```js
const { name: fullName, age: years } = person;
console.log(fullName); // Suba
```

#### Default values

```js
const { name, city = "Unknown" } = person;
console.log(city); // Unknown  ← not in the object, so default is used
```

---

### 7b. Array Destructuring

```js
const colors = ["red", "green", "blue"];

// Without destructuring
const first  = colors[0];
const second = colors[1];

// With destructuring
const [first, second, third] = colors;
console.log(first);  // red
console.log(second); // green
console.log(third);  // blue
```

#### Skip items with commas

```js
const [, , third] = colors;
console.log(third); // blue
```

### ⚠️ Important Points

| | Object `{}` | Array `[]` |
|---|---|---|
| **Matched by** | Key name | Position (order) |
| **Rename** | `{ name: newName }` | Just use a new variable name |
| **Defaults** | `{ key = default }` | `[a = default]` |

---

## 8. Spread & Rest Operators

Both use `...` but do **opposite things**.

---

### 8a. Spread — expands items outward

```js
// Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy an array
const copy = [...arr1];

// Merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3 }

// Pass array as function arguments
function add(x, y, z) { return x + y + z; }
const nums = [1, 2, 3];
console.log(add(...nums)); // 6
```

---

### 8b. Rest — collects items into an array

```js
function sum(...numbers) {   // rest must be LAST parameter
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(10, 20, 30, 40)); // 100
```

#### Rest in destructuring

```js
const [first, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(remaining); // [2, 3, 4, 5]
```

### ⚠️ Important Points

| | Spread `...` | Rest `...` |
|---|---|---|
| **What it does** | Expands into individual items | Collects items into an array |
| **Used in** | Function calls, array/object literals | Function parameters, destructuring |

- Rest must always be the **last** parameter — `function(a, b, ...rest)` ✅

---

## 9. Template Literals

Embed variables and expressions directly in a string — no more `+` concatenation.

### Syntax — use backticks `` ` `` and `${}`

```js
`Hello, ${variableOrExpression}!`
```

### Example

```js
const name = "Suba";
const age  = 25;

// Old way
console.log("Hello, " + name + ". You are " + age + " years old.");

// Template literal
console.log(`Hello, ${name}. You are ${age} years old.`);
```

### Expressions inside `${}`

```js
const a = 10;
const b = 5;
console.log(`${a} + ${b} = ${a + b}`);       // 10 + 5 = 15
console.log(`Is ${a} even? ${a % 2 === 0}`); // Is 10 even? true
```

### Multi-line strings

```js
const message = `Hello,
This is line two.
This is line three.`;
```

### ⚠️ Important Points

- Use **backticks** `` ` ``, not `'` or `"`.
- `${}` can hold any valid JS expression, not just variables.

---

## 10. User Input — prompt()

Opens a **browser dialog** asking the user to type something. Always returns a **string**.

### Syntax

```js
const userInput = prompt("Your question here");
```

### Example

```js
const name = prompt("What is your name?");
console.log(`Hello, ${name}!`);

const ageInput = prompt("How old are you?");
const age = Number(ageInput);  // convert string → number
console.log(`You are ${age} years old.`);
```

### ⚠️ Important Points

- Works only in a **browser** — NOT in Node.js.
- Always returns a **string** — use `Number()` or `parseInt()` when you need a number.
- Returns `null` if the user clicks Cancel.

---

## 11. Callbacks

A **callback** is a function passed as an argument to another function, to be called later.

### Example

```js
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // call the function that was passed in
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Suba", sayBye);
// Hello, Suba!
// Goodbye!
```

### Inline (anonymous) callback

```js
greetUser("Prakash", function() {
  console.log("See you later!");
});
```

### You already know callbacks!

`forEach`, `map`, `filter`, `find` all take callbacks:

```js
const numbers = [1, 2, 3];
numbers.forEach(function(num) {  // ← this IS a callback
  console.log(num);
});
```

### ⚠️ Important Points

- A callback is just a regular function — what makes it a "callback" is that it's **passed as an argument**.
- Callbacks are the foundation of asynchronous JavaScript.

---

## 12. setTimeout()

Runs a function **once after a delay**. Delay is in milliseconds (`1000ms = 1 second`).

### Syntax

```js
setTimeout(callback, delayInMilliseconds);
```

### Example

```js
console.log("Start");

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output order:
// Start
// End
// This runs after 2 seconds  ← appears 2 seconds later
```

"End" prints **before** the timeout — JavaScript doesn't wait, it moves on immediately.

### ⚠️ Important Points

- `setTimeout` is **asynchronous** — code after it keeps running without waiting.
- Delay is in **milliseconds** (1000 = 1 second).
- The callback runs **once** after the delay.

---

## 13. Promises

A **Promise** represents a value that will be available **in the future**.
Used for asynchronous operations (fetching data, reading files, etc.).

### Three states

| State | Meaning |
|---|---|
| **Pending** | Waiting — not done yet |
| **Fulfilled** | Completed successfully → `resolve()` |
| **Rejected** | Failed → `reject()` |

---

### 13a. Creating a Promise

```js
const myPromise = new Promise(function(resolve, reject) {
  const success = true;

  if (success) {
    resolve("It worked! ✅");
  } else {
    reject("Something went wrong ❌");
  }
});
```

---

### 13b. resolve()

Called when the operation **succeeds**. Passes the result to `.then()`.

```js
const promise = new Promise(function(resolve, reject) {
  resolve("Success!");
});
```

---

### 13c. reject()

Called when the operation **fails**. Passes the error to `.catch()`.

```js
const promise = new Promise(function(resolve, reject) {
  reject("Something failed!");
});
```

---

### 13d. .then()

Runs when the promise is **resolved**. Receives the resolved value.

```js
myPromise.then(function(result) {
  console.log(result); // "It worked! ✅"
});
```

---

### 13e. .catch()

Runs when the promise is **rejected**. Receives the error.

```js
myPromise.catch(function(error) {
  console.log(error); // "Something went wrong ❌"
});
```

---

### Full Example

```js
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
```

### ⚠️ Important Points

- `new Promise(function(resolve, reject) { ... })` — this is the pattern.
- Call `resolve(value)` on success → handled by `.then()`.
- Call `reject(error)` on failure → handled by `.catch()`.
- Chain them: `promise.then(...).catch(...)`.
- Promises are the cleaner alternative to deeply nested callbacks.

---

## ✅ Learning Status

| Topic | Status |
|---|---|
| Functions | ✅ Learned |
| Parameters & Arguments | ✅ Learned |
| Arrays | ✅ Learned |
| `push()` | ✅ Learned |
| `forEach()` | ✅ Learned |
| `map()` | ✅ Learned |
| `filter()` | ✅ Learned |
| `find()` | ✅ Learned |
| Objects | ✅ Learned |
| Arrays of Objects | ✅ Learned |
| Object Destructuring | ✅ Learned |
| Array Destructuring | ✅ Learned |
| Spread Operator | ✅ Learned |
| Rest Operator | ✅ Learned |
| Template Literals | ✅ Learned |
| User Input / `prompt()` | ✅ Learned |
| Callbacks | ✅ Learned |
| `setTimeout()` | ✅ Learned |
| Promises | ✅ Learned |
| `resolve()` / `reject()` | ✅ Learned |
| `.then()` / `.catch()` | ✅ Learned |

---

## 👥 How We Work Together

### Folder Structure

```text
JavaScript/
└── 01-Basics/
    ├── README.md          ← shared docs (this file)
    ├── suba/              ← Suba's practice files only
    │   └── practice.js
    └── prakash/           ← Prakash's practice files only
        └── practice.js
```

### Ground Rules

1. **README.md** is shared — update it when a new topic is learned.
2. **Only edit your own folder** — never touch the other dev's files.
3. **Add topics to README only after you've actually practised them.**
4. **Pull before you start** — always sync first to avoid conflicts.

### Our Learning Process

1. Study the concept
2. Read this README
3. Practice individually in your own folder
4. Compare implementations with each other
5. Improve the code
6. Update the README if needed
7. Move to the next topic

### Git Workflow

```bash
# 1. Always pull before starting
git pull origin main

# 2. Make your changes

# 3. Stage only what you changed
git add JavaScript/01-Basics/README.md
# or just your own practice files:
git add JavaScript/01-Basics/suba/

# 4. Commit with a clear message
git commit -m "docs: add Promises section to 01-Basics README"

# 5. Push
git push origin main
```

### Commit Message Convention

| Prefix | When to use |
|---|---|
| `docs:` | Adding or updating README / documentation |
| `feat:` | Adding new practice code |
| `fix:` | Fixing a bug in practice code |
| `refactor:` | Rewriting code without changing what it does |

---

> **Learn • Practice • Compare • Improve • Repeat 🚀**
>
> *Last updated: August 2026 — Topics covered through Promises*
