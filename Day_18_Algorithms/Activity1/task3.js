// ************************ Sorting Algorithms **************************


// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.


function quicksort(arr) {
    // Base case: arrays with 0 or 1 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Select the pivot element (using the last element in this implementation)
    const pivot = arr[arr.length - 1];
    
    // Arrays to hold elements less than, equal to, and greater than the pivot
    let less = [];
    let equal = [];
    let greater = [];

    // Partition the array into three arrays
    for (let element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }

    // Recursively apply quicksort to the less and greater arrays
    return [...quicksort(less), ...equal, ...quicksort(greater)];
}


let array = [90,20,10,50,70,30,80];
let sortedArray = quicksort(array);
console.log("Sorted array:", sortedArray);