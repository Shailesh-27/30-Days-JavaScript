// ************************ Basci Error Handling with try-Catch **************************


// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwErrorExample(){
    try {
        throw new Error('This is an error.')
    } catch (error) {
        console.error('An error occurred:', error.message)
    }
}

throwErrorExample()


// Task 2: Create a function that divides two numbers and throws an error if the denominator is 0. Use a try-catch block to handle this error.


function divideNumbers(numerator, denominator){
    try {
        if(denominator === 0){
            throw new Error("Division by zero is not allowed.")
        }
        return numerator / denominator
    } catch (error) {
        console.error("An error occurred:", error.message)
        return null
    }
}


console.log(divideNumbers(10,2));    // Output: 5
console.log(divideNumbers(10,0));    // Output: An error occurred: Division by zero is not allowed.
console.log(divideNumbers(-8,2));    // Output: -4
