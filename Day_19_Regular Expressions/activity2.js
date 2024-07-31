// ************************ Character Classes and Quantifiers **************************


// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const text = "My name is Shailesh and I Love Javascript.";

const pattern = /\b[A-Z][a-zA-Z]*\b/g;

const matches = text.match(pattern);

console.log("Matches found:", matches);

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const text1 = "The quick brown fox jumps over 12 lazy dogs and 34 cats in 2024.";

const pattern1 = /\d+/g;

const matches1 = text1.match(pattern1);

console.log("Matches found:", matches1);

