
// ************************ Loop Control Statements **************************

// The continue statement is used to skip the current iteration of a loop and proceed to the next iteration. Unlike break, continue does not terminate the loop entirely; instead, it jumps to the next iteration immediately after the continue statement is encountered.

// Task 8: Write a program to print numbers from 1 to 10 but skip the number 5 using continue statement.

//  Using for loop

console.log("Using For loop");
for (let i = 1; i <= 10; i++) {
    if(i === 5){
        continue   // skips iteration when i equals 5
    }
    console.log(i);
}

// output : 1 2 3 4 6 7 8 9 10

// Using while loop

console.log("Using while loop");
let number = 1

while (number <= 10) {
    if(number === 5){
        number++
        continue
    }
    console.log(number);
    number++; 
}


// Using do...while loop

console.log("Using do...while loop");
let index = 1

do {
    if(index === 5){
        index++
        continue
    }
    console.log(index);
    index++;  
} while (index <= 10);

