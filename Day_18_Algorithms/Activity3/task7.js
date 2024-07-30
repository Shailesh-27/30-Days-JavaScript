// ************************ String Algorithms **************************


// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.


function longestUniqueSubstringLength(str) {
    let start = 0; // Starting index of the current window
    let maxLength = 0; // Length of the longest substring found
    let charSet = new Set(); // Set to store unique characters in the current window

    // Iterate over each character in the string
    for (let end = 0; end < str.length; end++) {
        while (charSet.has(str[end])) {
            // Remove the character at the start of the window
            charSet.delete(str[start]);
            start++;
        }

        // Add the current character to the set
        charSet.add(str[end]);

        // Update the maximum length of the substring found
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Log the length of the longest substring without repeating characters
    console.log("Length of longest substring without repeating characters:", maxLength);
}

const inputString = "abcabcdbb";
longestUniqueSubstringLength(inputString);