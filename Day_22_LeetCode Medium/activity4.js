// ************************ 3Sum **************************


// Task 4: Solve the "3Sum" problem on LeetCode.
// - Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// - Log the triplets for a few test cases, including edge cases.


function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for the first position
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicate elements for the second and third positions
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Helper function to test and log results
function runTests() {
    // Test case 1
    let nums = [-1, 0, 1, 2, -1, -4];
    console.log('Test Case 1:', threeSum(nums)); 
    // Expected: [[-1, -1, 2], [-1, 0, 1]]

    // Test case 2
    nums = [0, 1, 1];
    console.log('Test Case 2:', threeSum(nums)); 
    // Expected: []

    // Test case 3
    nums = [0, 0, 0, 0];
    console.log('Test Case 3:', threeSum(nums)); 
    // Expected: [[0, 0, 0]]

    // Test case 4
    nums = [-1, 2, 1, -4];
    console.log('Test Case 4:', threeSum(nums)); 
    // Expected: [[-4, 1, 2]]

    // Test case 5
    nums = [1, 2, -2, -1];
    console.log('Test Case 5:', threeSum(nums)); 
    // Expected: []
}

runTests();
