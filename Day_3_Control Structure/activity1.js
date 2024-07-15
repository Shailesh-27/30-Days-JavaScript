
// ************************  If-Else Statements **************************

//Task 1: Write a Program to check if a number is positive, negative or Zero, and log the result to the console

const number = 10
let result

if(number === 0){
    result = `${number} is Zero`;
}
else if(number > 0){
    result = `${number} is Positive Number`
}
else{
    result = `${number} is Negative Number`
}

console.log(result);



//Task 2: Write a Program to check if a person is eligible to vote(age >= 18 ) and log the result to the console

const age = 18
let eligibleForVoteOrNot

if(age >= 18){
    eligibleForVoteOrNot = `Welcome you are Eligible to Vote`
}
else{
    eligibleForVoteOrNot = `Sorry!, you are not Eligible to Vote`
}

console.log(eligibleForVoteOrNot);