// ************************ Median of Two Sorted Arrays **************************


// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// - Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// - Log the median for a few test cases, including edge cases.


function findMedianSortedArrays(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    if (m > n) {
        // Ensure nums1 is the smaller array
        return findMedianSortedArrays(nums2, nums1);
    }

    let imin = 0;
    let imax = m;
    const halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            // i is too small, need to increase it
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            // i is too big, need to decrease it
            imax = i - 1;
        } else {
            // i is perfect
            let maxLeft;
            if (i === 0) maxLeft = nums2[j - 1];
            else if (j === 0) maxLeft = nums1[i - 1];
            else maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight;
            if (i === m) minRight = nums2[j];
            else if (j === n) minRight = nums1[i];
            else minRight = Math.min(nums1[i], nums2[j]);

            return (maxLeft + minRight) / 2.0;
        }
    }

    throw new Error("Input arrays are not sorted.");
}

const testCases = [
    { nums1: [1, 3], nums2: [2], expected: 2 },
    { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
    { nums1: [], nums2: [1], expected: 1 },
    { nums1: [2], nums2: [], expected: 2 },
    { nums1: [1, 2, 3, 4, 5], nums2: [6, 7, 8, 9, 10], expected: 5.5 },
    { nums1: [1, 3], nums2: [2, 7, 8], expected: 3 },
];

testCases.forEach(({ nums1, nums2, expected }) => {
    const result = findMedianSortedArrays(nums1, nums2);
    console.log(`findMedianSortedArrays([${nums1}], [${nums2}]) = ${result}; Expected = ${expected}`);
});
