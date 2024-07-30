// ************************ Sorting Algorithms **************************


// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array. 


function bubbleSort(arr){
    let n = arr.length;

    // Outer loop for each pass through the array
    for(let i = 0; i < n - 1; i++){
        let swapped = false;
        // Inner loop for comparing adjacent elements
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no elements were swapped, the array is sorted
        if(!swapped) break;
    }
    return arr;
}


let array = [90,20,10,50,70,30,80];
let sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);

