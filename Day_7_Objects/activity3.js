
// ************************ Nested Objects **************************


// Task 5: Create a nested object representing a library with properties like name and books (an array of book object), and log the library object to the console. 

let library = {
    name: "Book Library",
    books : [
        {
            title : "Rich Dad Poor Dad",
            author : "Robert Kiyosaki and Sharon Lechter",
            year : 1997,
        },
        {
            title : "Atomic Habits",
            author : "James Clear",
            year : 2018,
        },
        {
            title : "The 5 AM Club",
            author : "Robin Sharma",
            year : 2018,
        },
    ],
}

console.log(library);



// Task 6: Access and log the name of the library and the titles of all the books in the library.


// Access and log the name of the library
console.log("Library Name:", library.name);

// Access and log the titles of all the books in the library
console.log("Titles of Books:");
library.books.forEach(book => {
    console.log(book.title);
});