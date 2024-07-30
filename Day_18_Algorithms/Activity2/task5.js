// ************************ Searching Algorithms **************************


// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Find the middle index
        let mid = Math.floor((left + right) / 2);

        // Check if the target is at the middle
        if (arr[mid] === target) {
            return mid; // Target found at index mid
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            // If target is smaller, ignore the right half
            right = mid - 1;
        }
    }

    // Target is not present in the array
    return -1;
}


let array = [10,20,30,40,50,70,80];
let target = 70;
let index = binarySearch(array,target);

if(index !== -1){
    console.log(`Target value ${target} found at index: ${index}`);
}
else{
    console.log(`Target value ${target} not found in the array.`);
}