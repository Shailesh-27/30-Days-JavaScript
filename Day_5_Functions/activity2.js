
// ************************ Function Expression **************************


// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.


const findMax = function(a,b){
    const maxNumber = Math.max(a,b)
    console.log(`The maximum of ${a} and ${b} is: ${maxNumber}`);
}

findMax(5,10)
findMax(-2,0)
findMax(1,5)



// Task 4: Write a function expression to concatenate two strings and return the result.


const concatenateStrings = function(str1, str2){
    return str1 + str2
}

const result = concatenateStrings("JavaScript ", "is awesome!")
console.log(result);   //Output: JavaScript is awesome!