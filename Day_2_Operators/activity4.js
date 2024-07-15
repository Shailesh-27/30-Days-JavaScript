
// ************************  Logical Operators **************************


// Task 11: Write the Program that uses the && operator to combine two conditions and log the result to the console.

// && operator if one of the condition is false then the result is false 
// && operator only return true when both conditons are true

console.log(10 < 20 && 10 > 5);           // true && true => true
console.log(10 < 5 && 10 == 12);          // false && false => false
console.log(10 === 10 && 10 > 20);        // true && false => false


// Task 12: Write the Program that uses the || operator to combine two conditions and log the result to the console.

// || operator if one of the conitions is true the the result is true
// || operator only return false when both conditions are false

console.log(10 < 20 || 10 > 5);           // true || true => true
console.log(10 < 5 || 10 == 12);          // false || false => false
console.log(10 === 10 || 10 > 20);        // true || false => true


// Task 11: Write the Program that uses the ! operator to negate a condition and log the result to the console.
// ! operator toggle the value from true to false or false to true

console.log(!true);
console.log(!false);
console.log(!(10 < 20));    // !(true)  => false


// !( false && true ) || ( true || false )
// !(false) || (true)
// true || true
// true