// ================================
// DAY 03 — Objects & Destructuring
// Suba's Practice
// ================================
// Topics:
// 1. Objects
// 2. Arrays of Objects
// 3. Object Property Access
// 4. Object Destructuring
// 5. Array Destructuring
// ================================


// ================================
// 1. OBJECTS
// ================================
// An object groups related data as key-value pairs.

const person = {
    name: "Suba",
    age: 25,
    city: "Chennai"
};

console.log(person.name); // Suba
console.log(person.age);  // 25
console.log(person.city); // Chennai

// Adding a new property
person.email = "suba@example.com";
console.log(person.email);

// Updating a property
person.age = 26;
console.log(person.age); // 26


// ================================
// 2. ARRAYS OF OBJECTS
// ================================
// A list of objects — very common in real-world JavaScript.

const students = [
    { name: "Suba",    grade: 90 },
    { name: "Prakash", grade: 85 },
    { name: "Ram",     grade: 78 }
];

// Access by index
console.log(students[0].name);  // Suba
console.log(students[1].grade); // 85

// Loop through all
students.forEach(function(student) {
    console.log(student.name + " scored " + student.grade);
});

// Filter students who passed (grade >= 80)
const passed = students.filter(function(student) {
    return student.grade >= 80;
});

console.log(passed);
// [{ name: "Suba", grade: 90 }, { name: "Prakash", grade: 85 }]


// ================================
// 3. OBJECT PROPERTY ACCESS
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
// 4. OBJECT DESTRUCTURING
// ================================
// A shorthand way to unpack object properties into variables.

const user = {
    name: "Suba",
    age: 25,
    city: "Chennai"
};

// Without destructuring (old way)
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
const products = [
    { name: "Laptop",   price: 50000 },
    { name: "Mouse",    price: 1000  },
    { name: "Keyboard", price: 2000  }
];

products.forEach(function({ name, price }) {
    console.log(name + " costs " + price);
});
// Laptop costs 50000
// Mouse costs 1000
// Keyboard costs 2000


// ================================
// 5. ARRAY DESTRUCTURING
// ================================
// A shorthand way to unpack array items into variables.
// Based on position (order matters).

const fruits = ["apple", "banana", "mango"];

const [first, second, third] = fruits;
console.log(first);  // apple
console.log(second); // banana
console.log(third);  // mango

// Skip items using commas
const [, , lastFruit] = fruits;
console.log(lastFruit); // mango

// Swap variables using array destructuring
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1
