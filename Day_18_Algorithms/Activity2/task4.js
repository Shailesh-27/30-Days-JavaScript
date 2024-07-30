// ************************ Searching Algorithms **************************


// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is equal to the target
        if (arr[i] === target) {
            // Return the index of the target value
            return i;
        }
    }
    // Return -1 if the target value is not found
    return -1;
}

let array = [90,20,10,50,70,30,80];
let target = 50;
let index = linearSearch(array,target);

if(index !== -1){
    console.log(`Target value ${target} found at index: ${index}`);
}
else{
    console.log(`Target value ${target} not found in the array.`);
}