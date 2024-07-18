
// ************************ Array Methods (Intermediate) **************************


// Task 7: Use the map method to create an array where each number is doubled and log the new array.

let numbers = [1, 2, 3, 4, 5];

// Using map to create a new array where each number is doubled
let doubledNumbers = numbers.map(num => num * 2);

console.log("Doubled array:", doubledNumbers);



// Task 8: Use the filter method to create an array with only even numbers and log the new array.

// Using filter to create a new array with only even numbers
let evenNumbersArray = numbers.filter(num => num % 2 === 0);

console.log("Array with even numbers:", evenNumbersArray);



// Task 9: Use the reduce method to calculate the sum of all numbers in array and log the result.

// Using reduce to calculate the sum of all numbers in the array
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of all numbers:", sum);

// Explaination
// 'accumulator' accumulates the sum of all previous values as the iteration progresses.
// 'currentValue' represents the current element being processed.
// '0' is the initial value of the accumulator.