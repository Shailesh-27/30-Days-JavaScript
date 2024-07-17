
// ************************ Function Parameters and Default Values **************************


// Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter.


function multiplyTwoNumber(num1, num2 = 6){
    const result = num1 * num2
    console.log(`Multiplication of two numbers ${num1} and ${num2} is ${result}`);
}

multiplyTwoNumber(5,7)  // Output : 35
multiplyTwoNumber(5)  // Output : 30


// Task 7: Write a function that takes person's name and age and returns a greeting message. Provide default value for the age.


function greetPerson(name, age = 30){
    return `Hello, ${name}! You are ${age} years old.`;
};

result = greetPerson("Shailesh", 22)
console.log(result);             // Output: Hello, Shailesh! You are 22 years old.

result1 = greetPerson("Steve")
console.log(result1);            // Output: Hello, Steve! You are 30 years old (default value).

