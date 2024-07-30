// ************************ Array Algorithms **************************


// Task 8: Write a function to rotate an array by k positions. Log the rotated array.


function rotateArray(arr, k) {
    const n = arr.length;
    // Handle the case where k is greater than the length of the array
    k = k % n;
    
    // Function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    }
    
    // Reverse the entire array
    reverse(0, n - 1);
    // Reverse the first k elements
    reverse(0, k - 1);
    // Reverse the remaining n - k elements
    reverse(k, n - 1);
    
    console.log("Rotated array:", arr);
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7];
const k = 2;
rotateArray(array, k);
