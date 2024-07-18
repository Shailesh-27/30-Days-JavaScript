
// ************************ Array Methods (Basic) **************************


// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

let numbers = [1,2,3,4,5]

// Adding a new number to the end of the array using push
numbers.push(6)

console.log("Updated array is : ", numbers);



// Task 4: Use the pop method to remove the last element from the array and log the updated array.

// Removing the last element from the array using pop
let removedLastElement = numbers.pop();

console.log("Updated array:", numbers);
console.log("Removed element:", removedLastElement);



// Task 5: Use the shift method to remove the first element from the array and log the updated array.

// Removing the first element from the array using shift
let removedFirstElement = numbers.shift();

console.log("Updated array:", numbers);
console.log("Removed element:", removedFirstElement);



// Task 6: Use the unshift method to add an number to the beginning of the array and log the updated array.

// Adding a number to the beginning of the array using unshift
numbers.unshift(1);

console.log("Updated array:", numbers);