var events = require("events");
var util = require("util");

// var Person = function (name){
//     this.name = name;    
// };

// util.inherits(Person, events.EventEmitter);

// var James = new Person("James");
// //console.log(James);
// var Mary = new Person("Mary");
// var Ayo = new Person("Ayo"); 
// var people = [James, Mary, Ayo];

// people.forEach(function (person) {
//     person.on("speak", function (mssg) {
//         console.log(person.name + " said: " + mssg);
//     });
// });
// James.emit("speak", "I am cute");

util.inherits(Person, events.EventEmitter);
function Person(name) {
    this.name = name;
}

const James = new Person("James");
const Mary = new Person("Mary");
const Ayo = new Person("Ayo");
const people = [James, Mary, Ayo];

people.forEach((name) => name.on("someEvent", (mssg) =>
        console.log(`${name.name} said: ${mssg}`)));

James.emit("someEvent", "I am a fine boy");

// console.log(typeof(Person));
// console.log(typeof(James));
// console.log(James);