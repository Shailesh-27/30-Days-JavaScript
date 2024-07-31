// ************************ Assertions and Boundaries **************************


// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const text = "Hello world! This is a test.";

const pattern = /^\b\w+\b/;

const matches = text.match(pattern);

if(matches){
    console.log("Match found:", matches[0]);
} else {
  console.log("No match found.");
}


// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const text1 = "This is a test sentence";

const pattern1 = /\b\w+\b$/;

const matches1 = text1.match(pattern1);

if (matches1) {
    // matches[0] is the matched word at the end of the string
    console.log("Match found:", matches1[0]);
  } else {
    console.log("No match found.");
  }