// ************************ Two Sum **************************


// Task 1: Solve the "Two Sum" problem on LeetCode.
// - Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// - Log the indices for a few test cases.


function twoSum(numbers, target){
    const numberMap = new Map();

    for(let i = 0; i < numbers.length; i++){
        const complement = target - numbers[i];

        if(numberMap.has(complement)){
            return [numberMap.get(complement),i];
        }

        numberMap.set(numbers[i],i);
    }
    throw new Error("No two sum solution");
}

// Test cases
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },    // Expected output: [0, 1]
    { nums: [3, 2, 4], target: 6 },           // Expected output: [1, 2]
    { nums: [3, 3], target: 6 }               // Expected output: [0, 1]
];

testCases.forEach(({nums,target}) => {
    const result = twoSum(nums,target);
    console.log(`Indices for nums: [${nums}] with target ${target} are: [${result}]`);
})