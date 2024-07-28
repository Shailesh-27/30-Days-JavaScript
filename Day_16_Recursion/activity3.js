// ************************ String Manipulation with Recursion **************************


// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.


function reverseString(str){
    // Base Case
    if(str.length <= 1){
        return str;
    }
    // Recursive Case
    return reverseString(str.slice(1)) + str[0];
}


// Test cases
const testCases = [
    "",          // empty string
    "a",         // single character
    "hello",     // typical word
    "world",     // another word
    "JavaScript" // longer word
];

testCases.forEach((testCase,index) => {
    const result = reverseString(testCase)
    console.log(`Reverse of "${testCase}" is "${result}"`);
})


// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.


function isPalindrome(str){
    // Helper function to handle case-insensitivity and remove non-alphanumeric characters
    function cleanString(s){
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }
    // Base Case
    const cleanedStr = cleanString(str)
    if(cleanedStr.length <= 1){
        return true;
    }
    // Recursive Case
    if(cleanedStr[0] === cleanedStr[cleanedStr.length - 1]){
        return isPalindrome(cleanedStr.slice(1,-1))
    }
    else{
        return false;
    }

}

// Test cases
const testCase = [
    "",                // empty string
    "a",               // single character
    "radar",           // palindrome
    "hello",           // not a palindrome
    "A man, a plan, a canal, Panama", // palindrome with spaces and punctuation
    "Was it a car or a cat I saw?" // palindrome with spaces and punctuation
];

testCase.forEach((testCase, index) => {
    const result = isPalindrome(testCase);
    console.log(`"${testCase}" is${result ? '' : ' not'} a palindrome`);
});