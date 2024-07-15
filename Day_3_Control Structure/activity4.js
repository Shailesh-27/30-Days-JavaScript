//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score log the result to the console


let score = 50

switch (true) {
    case score >= 75:
        console.log(`Your grade is A`);
        break;
    case score >= 70:
        console.log(`Your grade is B`);
        break;
    case score >= 60:
        console.log(`Your grade is C`);
        break;
    case score >= 50:
        console.log(`Your grade is D`);
        break;
    default:
        console.log(`Your grade is F`);
        break;
}
