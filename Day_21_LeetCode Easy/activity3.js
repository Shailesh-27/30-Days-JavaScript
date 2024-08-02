// ************************ Palindrome Number **************************


// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// - Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// - Log the result for a few test cases, including edge cases like negative numbers.


function isPalindrome(x){
    // Negative numbers and numbers ending with zero (but not zero itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    // Reverse the number
    let original = x;
    let reversed = 0;

    while(x > 0){
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reversed;
}

// Test cases
const testCases = [
    121,        // Expected output: true
    -121,       // Expected output: false
    10,         // Expected output: false
    0,          // Expected output: true
    12321       // Expected output: true
];

testCases.forEach(testCase => {
    const result = isPalindrome(testCase);
    console.log(`Is ${testCase} a palindrome? ${result}`);
});
