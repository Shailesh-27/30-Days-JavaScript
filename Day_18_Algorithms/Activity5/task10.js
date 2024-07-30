// ************************ Dynamic Programming (Optional) **************************


// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.


function fibonacci(n) {
    if (n <= 0) {
        return []; // Return an empty array for non-positive n
    }
    if (n === 1) {
        return [0]; // The first Fibonacci number
    }
    if (n === 2) {
        return [0, 1]; // The first two Fibonacci numbers
    }

    // Array to store Fibonacci numbers
    let fib = [0, 1];

    // Compute Fibonacci numbers up to n
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

const n = 10; // Number of Fibonacci numbers to generate
const fibonacciNumbers = fibonacci(n);
console.log("Fibonacci numbers:", fibonacciNumbers);

