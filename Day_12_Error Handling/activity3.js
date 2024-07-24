
// ************************ Custom Error Objects **************************


// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using try-catch block. 

class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}

function throwsError(){
    throw new CustomError("This is a custom error message.");
}

function handleCustomError() {
    try {
        throwsError();
    } catch (error) {
        // Check if the error is an instance of CustomError
        if (error instanceof CustomError) {
            console.error("Custom Error caught:", error.message);
        } else {
            // Handle other types of errors
            console.error("Unexpected error:", error.message);
        }
    }
}

handleCustomError()


// Task 5: Write a function that validates user input (e.g., checking if string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
    }
}

function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError("Input must be a non-empty string.");
    }
}

function handleUserInput(input) {
    try {
        validateInput(input);
        console.log("Input is valid:", input);
    } catch (error) {
        // Check if the error is a validation error
        if (error instanceof ValidationError) {
            console.error("Validation Error:", error.message);
        } else {
            // Handle other types of errors
            console.error("Unexpected error:", error.message);
        }
    }
}

handleUserInput("Hello");        // Input is valid: Hello
handleUserInput("");             // Validation Error: Input must be a non-empty string.
handleUserInput(123);            // Validation Error: Input must be a non-empty string.
handleUserInput(null);           // Validation Error: Input must be a non-empty string.
handleUserInput(undefined);      // Validation Error: Input must be a non-empty string.