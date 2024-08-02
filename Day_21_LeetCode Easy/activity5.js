// ************************ Valid Parentheses **************************


// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// - Write a function that takes a string containing just the characters '(', ')', '', '}', 'T' and ']', and determines if the input string is valid.
// - A string is valid if open brackets are closed in the correct order.
// - Log the result for a few test cases.



function isValid(s){
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (const char of s) {
        if (bracketMap[char]) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If it's a closing bracket
            const lastBracket = stack.pop();
            // Check if the last opening bracket matches the current closing bracket
            if (char !== bracketMap[lastBracket]) {
                return false;
            }
        }
    }
    // If the stack is empty, all brackets are matched; otherwise, they are not
    return stack.length === 0;
}

// Test cases
const testCases = [
    "()",        // Expected output: true
    "()[]{}",    // Expected output: true
    "(]",        // Expected output: false
    "([)]",      // Expected output: false
    "{[]}",      // Expected output: true
    "",          // Expected output: true (empty string is valid)
    "({[()]})",  // Expected output: true
    "((()))",    // Expected output: true
    "(((",        // Expected output: false (unmatched opening brackets)
    "(()))"      // Expected output: false (unmatched closing bracket)
];

testCases.forEach(testCase => {
    const result = isValid(testCase);
    console.log(`Is "${testCase}" a valid parentheses string? ${result}`);
});
