// ************************ Trapping Rain Water **************************


// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// - Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// - Log the amount of trapped water for a few test cases.


function trap(height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let left_max = 0;
    let right_max = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                waterTrapped += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                waterTrapped += right_max - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
}

const testCases = [
    { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
    { height: [4, 2, 0, 3, 2, 5], expected: 9 },
    { height: [1, 1, 1, 1], expected: 0 },
    { height: [3, 0, 2], expected: 2 },
    { height: [], expected: 0 },
    { height: [1, 2, 3, 4, 5], expected: 0 }
];

testCases.forEach(({ height, expected }) => {
    const result = trap(height);
    console.log(`trap([${height}]) = ${result}; Expected = ${expected}`);
});

