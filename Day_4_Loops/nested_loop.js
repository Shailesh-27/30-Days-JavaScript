
// ************************ Nested Loop **************************


// Task 7: Write a program to print a pattern using nested for loops.

// *
// * *
// * * *
// * * * *
// * * * * *

const row = 5

for (let i = 1; i <= row; i++) {
     for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");   // for Avoiding new line we use this
     }
     console.log("");
}

