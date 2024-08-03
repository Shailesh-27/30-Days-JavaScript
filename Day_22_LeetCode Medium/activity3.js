// ************************ Container With Most Water **************************


// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// - Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// - Log the maximum amount of water for a few test cases.


function maxArea(height) {
    let left = 0; // Pointer at the beginning
    let right = height.length - 1; // Pointer at the end
    let maxArea = 0; // To store the maximum area

    while (left < right) {
        // Calculate the current area
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;
        
        // Update maxArea if we found a larger area
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Helper function to test and log results
function runTests() {
    // Test case 1
    let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log('Test Case 1:', maxArea(heights)); // Expected: 49

    // Test case 2
    heights = [1, 1];
    console.log('Test Case 2:', maxArea(heights)); // Expected: 1

    // Test case 3
    heights = [4, 3, 2, 1, 4];
    console.log('Test Case 3:', maxArea(heights)); // Expected: 16

    // Test case 4
    heights = [1, 2, 1];
    console.log('Test Case 4:', maxArea(heights)); // Expected: 2

    // Test case 5
    heights = [1, 2, 4, 3];
    console.log('Test Case 5:', maxArea(heights)); // Expected: 4
}

runTests();
