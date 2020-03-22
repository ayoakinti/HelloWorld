// // Constructor 
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// // Prototype
// Book.prototype.getSummary = function () {
//     console.log(`${this.title} was written by ${this.author} in the year ${this.year}`);
// };  

// // Inheritance by Magazine
// function Magazine (title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }
// Magazine.prototype = Object.create(Book.prototype);
// Magazine.prototype.constructor = Magazine;

// const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");
// console.log(mag1);