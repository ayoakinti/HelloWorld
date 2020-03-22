// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
// }

// Person.prototype.getFullName = function (firstName, lastName, dob) {
//     // return this.getFullName = this.firstName + " " + this.lastName;
// return this.getFullName = `${this.firstName} ${this.lastName}`;
// };


class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    };
    getFullName (){
        return `${this.firstName} ${this.lastName}`;
    }
    getFullYear(){
        return this.dob.getFullYear();
    }
};
const person1 = new Person ("Ayomide", "Akintimehin", "4-3-1980");
const person2 = new Person ("Oluwatobi", "Onasanya", "12-06-1996");

console.log(person1);
console.log(person2.getFullName());
console.log(person2.getFullYear());