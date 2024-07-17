
// ************************ Arrow Functions **************************


// Task 5: Write an arrow functions to calculate the sum of two numbers and return the result.

// Explicit return

const sumOfNumber = (a,b) => {
    return a + b
}

result = sumOfNumber(5,9)
console.log(`Result is ${result}`);


// Implicit return

const addTwo = (a,b) => a + b

console.log(`Result is ${addTwo(4,8)}`);



// Task 6: Write an arrow functions to check if string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => {
    return str.includes(char);
};

console.log(containsCharacter("Shailesh", "e")); // Output: true
console.log(containsCharacter("Shailesh", "E")); // Output: false
console.log(containsCharacter("JavaScript", "x")); // Output: false