
// ************************ Object Iteration **************************


// Task 8: Use a for...in loop to iterate ove the properties of the book object and log each property and its value.


let book = {
    title : "Rich Dad Poor Dad",
    author : "Robert Kiyosaki and Sharon Lechter",
    year : 1997,
}

for (let key in book){
    console.log(key + ": " + book[key]);
}

console.log("-----------------------------------");


// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

// Get all keys of the book object and log them
let keys = Object.keys(book)
console.log("Keys:");
keys.forEach(key =>{
    console.log(key);
})


// Get all values of the book object and log them
let values = Object.values(book)
console.log("\nValues:");
values.forEach(value => {
    console.log(value);
});

