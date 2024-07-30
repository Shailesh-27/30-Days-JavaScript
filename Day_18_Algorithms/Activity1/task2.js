
// ************************ Sorting Algorithms **************************


// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.


function selectionSort(arr) {
    let n = arr.length;
    // Outer loop to traverse the entire array
    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element of the unsorted portion
        let minIndex = i;
        
        // Inner loop to find the smallest element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}


let array = [90,20,10,50,70,30,80];
let sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);
