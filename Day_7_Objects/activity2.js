
// ************************ Object Methods **************************


// Task 3: Add a method to the book object that returns a string with the book's title and author, log the result of calling this method.


let book = {
    title : "Rich Dad Poor Dad",
    author : "Robert Kiyosaki and Sharon Lechter",
    year : 1997,
    getInfo: function(){
        return this.title + " by " + this.author
    },
    updateYear: function(newYear){
        this.year = newYear
    }
}

console.log(book.getInfo());



// Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.


// Call the method to update the year
book.updateYear(2012);

console.log(bookk);