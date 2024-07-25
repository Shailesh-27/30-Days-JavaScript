// ************************ Basci Error Handling with try-Catch **************************


// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.


// Importing the add function from addNumbers module
// import add from './add_module1';
const add = require('./add_module1');;

const sum = add(5,3);
console.log('Sum:', sum); // Output: Sum: 8


// Task 2: Create a module that exports an object representating a person wih properties and methods. Import and use this module in another script.


const person = require('./person_module')

// Accessing properties and calling method of the person object
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Gender: ${person.gender}`);
console.log(person.greet());

