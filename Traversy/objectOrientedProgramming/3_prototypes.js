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

// Book.prototype.getAge = function () {
//   const Age = new Date().getFullYear() - this.year;
//   return Age;
// };

// Book.prototype.reviseYear = function (updateYear) {
//     this.year = updateYear;
//     this.revised = true;
//     return this.year;
// };

// const book1 = new Book("Book One", "John Doe", "2013");
// const book2 = new Book("Book Two", "Jane Doe", "2016");

// console.log(book2);
// console.log(book1.getAge());
// console.log(book1.reviseYear("2020"));
// console.log(book1);
