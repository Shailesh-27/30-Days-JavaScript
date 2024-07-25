// ************************ Importing Entire Modules **************************


// Task 5: Create a module that exports multiple constants and functions. Import the entite module as an object in another script and use its properties.

const utils = require('./module')

// Using the imported constants and functions
console.log('PI:', utils.PI);
console.log('E:', utils.E);
console.log('Area of circle with radius 5:', utils.calculateArea(5));
console.log('Factorial of 5:', utils.factorial(5));
