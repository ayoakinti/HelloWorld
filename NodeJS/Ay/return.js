var stuff = require("./function_expressions");

console.log(stuff.counter(["Shola", 42, 76, "Bisola"])); 
console.log(stuff.sayAy());
console.log(stuff.adder(2,3));
console.log(stuff.callFunction(stuff.sayAy));