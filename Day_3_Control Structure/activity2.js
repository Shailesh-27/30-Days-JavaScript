
// ************************ Nested If-Else Statements **************************

//Task 3: Write a program to find the largest of three numbers usign nested if-else statements

const num1 = 10
const num2 = 20
const num3 = 15

let largestNumber

if(num1 > num2){
    if(num1 > num3){
        largestNumber = `Among ${num1} ${num2} ${num3} : ${num1} is Largest Number.`
    }
    else{
        largestNumber = `Among ${num1} ${num2} ${num3} : ${num3} is Largest Number.`
    }
}
else{
    if(num2 > num3){
        largestNumber = `Among ${num1} ${num2} ${num3} : ${num2} is Largest Number.`
    }
    else{
        largestNumber = `Among ${num1} ${num2} ${num3} : ${num3} is Largest Number.`
    }
}

console.log(largestNumber)