
// ************************ Using Third-Party Modules **************************


// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

const _ = require('lodash')

const numbers = [1,2,3,4,5]
const sum = _.sum(numbers)
console.log('Sum of numbers:', sum); // Output: Sum of numbers: 15