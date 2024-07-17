
// ************************ Function Declaration **************************


// Task 1: Write a function to check if a number is even or odd and log the result to the console.


function oddOrEven(num){
    if(num % 2 === 0){
        console.log(`${num} is even number`);
    }
    else{
        console.log(`${num} is odd number`);
    }
}

oddOrEven(10)



// Task 2: Write a function to calculate the square of a number and return the result.


function squareOfNumber(num){
    return num * num
}

const result = squareOfNumber(9)
console.log(`Result is ${result}`);