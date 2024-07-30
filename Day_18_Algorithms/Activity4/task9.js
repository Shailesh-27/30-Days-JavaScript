// ************************ Array Algorithms **************************


// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.


function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Traverse both arrays and merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    // Log the merged array
    console.log("Merged array:", mergedArray);
}

// Example usage
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2);
