// class Book{
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} was written by ${this.author} in the year ${this.year}`;
//     }

//     getAge() {
//      const age = new Date().getFullYear() - this.year;
//      return `${this.title} is ${age} years old`;   
//     }

//     revise(newYear) {
//         this.year = newYear;
//         this.revised = true;
//     }

//     static twoNames(){
//         return "Ayomide Akintimehin";
//     }
// }

// const book1 = new Book("Book One", "John Doe", "2016");

// console.log(book1.getAge());
// console.log(book1.getSummary());
// console.log(Book.twoNames());
