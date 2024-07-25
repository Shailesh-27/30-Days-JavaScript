
// Constants
const PI = 3.14159;
const E = 2.71828;

// Function to calculate the area of a circle
function calculateArea(radius) {
    return PI * radius * radius;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Exporting constants and functions as an object
module.exports = {
    PI,
    E,
    calculateArea,
    factorial
};