// ************************ Basic Regular Expressions **************************


// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.


const text = "I love JavaScript. JavaScript is great for web development. Learning JavaScript can be fun!";

// Regular expression pattern to match "JavaScript" as a whole word
const pattern = /\bJavaScript\b/g;   

const matches = text.match(pattern);

console.log("Matches found:", matches);



// Task 2: Write a regular expression to match all digits in a string. Log the matches.


const text1 = "The year is 2024 and the time is 12:45 PM.";

const pattern1 = /\d+/g;   // Use + to match one or more digits together
// const pattern1 = /\d/g;  // Match individual digits

const matches1 = text1.match(pattern1);

console.log("Matches found:", matches1);