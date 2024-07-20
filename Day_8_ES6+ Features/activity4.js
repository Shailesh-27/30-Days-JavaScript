
// ************************ Default Parameters **************************


// Task 7: Write a function thet takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.


// Function to return the product of two numbers, with a default value for the second parameter
function product(a, b = 1) {
    return a * b;
}

console.log(product(5, 3)); // Output: 15 (5 * 3)
console.log(product(4)); // Output: 4 (4 * 1, since the default value of b is 1)