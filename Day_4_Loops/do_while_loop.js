
// ************************ Do...While Loop **************************


// Task 5: Write a program to print numbers from 1 to 5 using do...while loop.

let index = 1

do {
    console.log(index);
    index++
} while (index <= 5);



// Task 6: Write a program to calculate the factorial of a number using do...while loop.


let factorial = 1
let value = 1
let number = 5

do {
    factorial = factorial * value
    value++
} while (value<=number);

console.log(`Factoial of ${number} is ${factorial}`);


