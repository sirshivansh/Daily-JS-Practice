// Nested Object:

// Create an object library with properties name, location, 
// and a nested object books containing properties title, author, and year. 
// Print the author of one of the books.

let library = {
    name: "Bob",
    location: "New York",
    books:{
        book1 : {
            title: "The Great Gatsby",
            author: "Franz",
            year: 1976
        }
    }
};

console.log("Author of book1: ", library.books.book1.author);