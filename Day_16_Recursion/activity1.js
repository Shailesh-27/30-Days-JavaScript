// ************************ Basic Recursion **************************


// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.


function factorial(n){
    // Base Case
    if(n === 0 || n === 1){
        return 1;
    }
    // Recursive Case
    return n * factorial(n - 1);
}


console.log(factorial(1));             // Output: 1
console.log(factorial(2));             // Output: 2
console.log(factorial(5));             // Output: 120
console.log(factorial(8));             // Output: 40320
console.log(factorial(12));            // Output: 479001600


// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.


function fibonacci(n){
    // Base Case
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    // Recursive Case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 0 1 1 2 3 5 8 13 21 34 55
console.log(fibonacci(0));           // Output: 0
console.log(fibonacci(1));           // Output: 1
console.log(fibonacci(4));           // Output: 3
console.log(fibonacci(5));           // Output: 5
console.log(fibonacci(8));           // Output: 21
console.log(fibonacci(10));          // Output: 55


