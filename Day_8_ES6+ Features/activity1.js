
// ************************ Template Literals **************************


// Task 1: Use template literals to create a string that includes variable for person' name and age, and log the string to console.

const personName = "Shailesh"
const personAge = 23

// Using template literals
const greeting  = `Hello, my name is ${personName} and I am ${personAge} years old.`

console.log(greeting);



// Task 2: Create a multi-line string using template literals and log it to the console.

const multilineString = `
Name  is Shaielsh
Age is 23 year
Learning 30 Days of JavaScript
- by Hitesh Chaudhary

Template literals allow easy embedding of variables like:
- ${1 + 1}
- ${'Hello, ' + 'world!'}
- ${Math.random()}
`

console.log(multilineString);