
// ************************ Array Iteration **************************


// Task 10: Use a for loop to iterate over the array and log each element to the console.

let numbers = [1,2,3,4,5,6]

// Using a for loop to iterate over the array
for (let i = 0; i < numbers.length; i++) {
    console.log(`Element at index ${i} is ${numbers[i]}`);
}


 console.log("-----------------------------------");
// Task 11: Use a for each loop to iterate over the array and log each element to the console.

// Using forEach to iterate over the array and log each element

numbers.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
})