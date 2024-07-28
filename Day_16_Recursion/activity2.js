// ************************ Recursion with Arrays **************************


// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.


function sumArray(arr){
    // Base Case
    if(arr.length === 0){
        return 0;
    }
    // Recursive case
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([]));                  // Output: 0
console.log(sumArray([1,2,3,4,5]));         // Output: 15
console.log(sumArray([2,4,6,8,10]));        // Output: 30
console.log(sumArray([1,3,5,7,9]));         // Output: 25
console.log(sumArray([-1,-2,3, 1]));        // Output: 1


// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.


function findMax(arr){
    // Base Case
    if(arr.length === 1){
        return arr[0];
    }
    // Recursive case
    const maxOfRest = findMax(arr.slice(1))

    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([1]));                       // Output: 1
console.log(findMax([1,3,2]));                   // Output: 3
console.log(findMax([10, 20, 4, 25]));           // Output: 25
console.log(findMax([-1,-2, -4, -3]));           // Output: -1
console.log(findMax([1,2,5,7,4]));               // Output: 7
