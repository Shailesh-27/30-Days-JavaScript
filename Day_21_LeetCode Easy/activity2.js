// ************************ Reverse Integer **************************


// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// - Write a function that takes an integer and returns it with its digits reversed.
// - Handle edge cases like negative numbers and numbers ending in zero.
// - Log the reversed integers for a few test cases.


function reverseInteger(x){
    // Check if the input is negative
    const isNegative = x < 0;
    // Convert the number to a string and handle the negative sign
    const str = Math.abs(x).toString();
    // Reverse the string and convert it back to a number
    const reversedStr = str.split('').reverse().join('');
    // Convert the reversed string back to an integer
    let reversedInt = parseInt(reversedStr, 10);

    // If the original number was negative, negate the reversed integer
    if (isNegative) {
        reversedInt = -reversedInt;
    }
    // Check for overflow. 32-bit signed integer range is [-2^31, 2^31 - 1]
    if (reversedInt > Math.pow(2, 31) - 1 || reversedInt < -Math.pow(2, 31)) {
        return 0;
    }
    
    return reversedInt;
}

const testCases = [
    123,      // Expected output: 321
    -456,     // Expected output: -654
    120,      // Expected output: 21
    0,        // Expected output: 0
    1000000003 // Expected output: 0 (Overflow case)
];

testCases.forEach(testCase => {
    const result = reverseInteger(testCase);
    console.log(`Reversed integer of ${testCase} is: ${result}`);
});
