
// ************************ Spread and Rest Operators **************************


// Task 5: Use a spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. 

const numbers = [1,2,3,4,5]

// using spread operator
const moreNumbers = [...numbers, 6,7,8,9]

console.log(moreNumbers);



// Task 6: Use a rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

// Function to sum arbitrary number of arguments using rest parameter
function sum(...numbers) {
   
    let total = 0;
    // Iterate through each argument (which is now in the numbers array)
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9,10));
console.log(sum(2,4,6,8,10));


