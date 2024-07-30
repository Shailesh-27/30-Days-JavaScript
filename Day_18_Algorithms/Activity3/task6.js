// ************************ String Algorithms **************************


// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.


function countCharacterOccurrences(str) {
    const charCount = {}; // Object to store character counts

    // Iterate over each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Otherwise, add the character to the object with count 1
            charCount[char] = 1;
        }
    }

    // Log the character counts
    console.log("Character counts:", charCount);
}

const string = "Shailesh";
countCharacterOccurrences(string);