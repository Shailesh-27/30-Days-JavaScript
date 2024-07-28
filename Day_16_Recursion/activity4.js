// ************************ Recursive Search **************************


// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.


function binarySearch(arr, target, low = 0, high = arr.length - 1){
    if(low > high){
        return -1;
    }

    const mid = Math.floor((low + high) / 2)

    if(arr[mid] === target){
        return mid;
    }

    if(arr[mid] > target){
        return binarySearch(arr,target,low,mid - 1)
    }
    else{
        return binarySearch(arr, target, mid + 1, high);
    }
}

const testCases = [
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 5 },       // Target is in the middle
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 10 },      // Target is at the end
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 1 },       // Target is at the beginning
    { array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 11 },      // Target is not in the array
    { array: [1, 3, 5, 7, 9], target: 7 }                        // Target is in an odd-length array
];

testCases.forEach(({ array, target }, index) => {
    const result = binarySearch(array, target);
    console.log(`Test case ${index + 1}: Target ${target} ${result !== -1 ? `found at index ${result}` : 'not found'}`);
});


// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.


function countOccurrences(arr, target, index = 0){
    if(index > arr.length){
        return 0;
    }

    const countAtIndex = arr[index] === target ? 1 : 0;

    return countAtIndex + countOccurrences(arr,target,index + 1);
}

const testCase = [
    { array: [1, 2, 3, 2, 2, 4, 2], target: 2 }, // Multiple occurrences
    { array: [1, 2, 3, 4, 5], target: 3 },       // Single occurrence
    { array: [1, 1, 1, 1, 1], target: 1 },       // All elements match
    { array: [2, 4, 6, 8], target: 5 },           // Target not in array
    { array: [], target: 1 }                      // Empty array
];

testCase.forEach(({ array, target }, index) => {
    const result = countOccurrences(array, target);
    console.log(`Test case ${index + 1}: Target ${target} occurs ${result} ${result > 1 ? 'times' : 'time'}`);
});