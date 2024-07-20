
// ************************ Destructuring **************************


// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [10, 20, 30, 40, 50];

// Using array destructuring to extract first and second elements
const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// if you want third and fifth element 
const [, , third, , fifth] = numbers;

console.log(`Third element: ${third}`);
console.log(`Fifth element: ${fifth}`);


// Task 4:  Use object destructuring to extarct the title and author from a book object and log them to console.

let book = {
    title : "Rich Dad Poor Dad",
    author : "Robert Kiyosaki and Sharon Lechter",
    year : 1997,
    genre : "Non-fiction",
}

// Using object destructuring to extract title and author
const { title, author } = book;

console.log(`Book title: ${title}`);
console.log(`Book author: ${author}`);