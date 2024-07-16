
// ************************ Loop Control Statements **************************

// The break statement is used to terminate the current loop, switch, or labeled statement immediately. When encountered inside a loop or switch, it causes control to exit the structure entirely and resume execution at the next statement following the loop or switch.


// Task 9: Write a program to print numbers from 1 to 10 but stop the loop when the number is 7 using break statement.

//  Using for loop

console.log("Using For loop");
for (let i = 1; i <= 10; i++) {
    if(i === 7){
        break     // exits the loop when i equals 7
    }
    console.log(i);
}

// output: 1 2 3 4 5 6


// Using while loop

console.log("Using while loop");
let number = 1

while (number <= 10) {
    if(number === 7){
        break
    }
    console.log(number);
    number++; 
}


// Using do...while loop

console.log("Using do...while loop");
let index = 1

do {
    if(index === 7){
        break
    }
    console.log(index);
    index++;  
} while (index <= 10);

