// ************************ Longest Substring Without Repeating Characters **************************


// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// - Write a function that takes a string and returns the length of the longest substring without repeating characters.
// - Log the length for a few test cases, including edge cases.


function lengthOfLongestSubstring(s) {
    let set = new Set(); 
    let left = 0; 
    let maxLength = 0; 

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]); 
            left++; // Move the left pointer to the right
        }
        set.add(s[right]); // Add the current character to the set
        maxLength = Math.max(maxLength, right - left + 1); // Update maxLength if needed
    }

    return maxLength;
}

// Helper function to test and log results
function runTests() {
    
    let s = "abcabcbb";
    console.log('Test Case 1:', lengthOfLongestSubstring(s)); // Expected: 3 ("abc")

 
    s = "bbbbb";
    console.log('Test Case 2:', lengthOfLongestSubstring(s)); // Expected: 1 ("b")

   
    s = "pwwkew";
    console.log('Test Case 3:', lengthOfLongestSubstring(s)); // Expected: 3 ("wke")

    
    s = "";
    console.log('Test Case 4:', lengthOfLongestSubstring(s)); // Expected: 0

  
    s = "a";
    console.log('Test Case 5:', lengthOfLongestSubstring(s)); // Expected: 1 ("a")

    
    s = "abcaefg";
    console.log('Test Case 6:', lengthOfLongestSubstring(s)); // Expected: 6 ("bcaefg")
}

runTests();

