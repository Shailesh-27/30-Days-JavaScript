
// ************************ This keyword **************************


// Task 7: Add a method to the book object that uses the this keyword to return a string with book's title and year, and log the result of calling this method.


let book = {
    title : "Rich Dad Poor Dad",
    author : "Robert Kiyosaki and Sharon Lechter",
    year : 1997,
    getInfo: function(){
        return this.title + " (" + this.year + ")"
    }
}

console.log(book.getInfo());