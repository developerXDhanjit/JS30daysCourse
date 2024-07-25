/* Activity 1 {Object Cration and access } */

let book = {
    author: "Osho",
    bookName: "Learning to Silence Your Mind",
    year: 2024,
    details: function () {
        return `Title : ${this.bookName} , Author : ${this.author}`
    },
    updateYear: function (updatedYear = 2024) {
        book.year = updatedYear
        return `The published year of book is updated to ${updatedYear}`
    }
}

// console.log(book);
// console.log(`Title : ${book.bookName} , Author: ${book.author}`); 
// console.log(book.details());
// console.log(book.updateYear(2025));

let library = {
    libraryName: "The Mysterious Library 101",
    location: "Mars",
    establishedYear: 2244,
    books: [
        {
            title: "Alchemist",
            author: "NaN",
            year: 2018
        },
        {
            title: "Miracle Morning",
            author: "Who?",
            year: 2015
        },
        {
            title: "Clear Thiniking ",
            author: "Shane Parish",
            year: 2023
        }]
}

// console.log(library);


/* for (const prop in book) {
   console.log(`${prop} : ${book[prop]} `);
} */

// console.log(Object.keys(book));

for(let i = 0 ; i < Object.keys(book).length ; i++){
    // console.log(`${Object.keys(book)[i]} : ${Object.values(book)[i]}`);
    // console.log(Object.entries(book)[i]);
}