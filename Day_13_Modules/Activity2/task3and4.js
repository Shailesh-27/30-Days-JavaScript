// ************************ Named and Default Exports **************************


// Task 3: Create a module that exports multiple function using named exports. Import and use these functions in another script.

// Importing functions using named imports from utils module
const { square, cube, add } = require('./named_module');

// Using the imported functions
console.log('Square of 5:', square(5)); // Output: Square of 5: 25
console.log('Cube of 3:', cube(3)); // Output: Cube of 3: 27
console.log('Sum of 3 and 5:', add(3,5));  // Output: Sum of 3 and 5: 8

// Task 4: Create a module that exports a single function using default exports. Import and use these functions in another script.

const addNumber = require('./default_module');

const sum = addNumber(5, 3);
console.log('Sum:', sum); // Output: Sum: 8