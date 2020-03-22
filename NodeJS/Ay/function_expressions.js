var sayAy = function() {
    return "Ay";
};

function callFunction(fun) {
    return fun();
}

var counter = function (arr) {
    return "There are " + arr.length + " items in the array";
};

/* 
This is an alternative
module.exports.counter = function (arr) {
    return "There are " + arr.length + " items in the array";
};
*/

var adder = function(a,b) {
    //return "The sum of " + a + " and " + b + " is " + (a+b); 
    return `The sum of the two numbers is ${a+b}`;
};

module.exports.sayAy = sayAy;
module.exports.callFunction = callFunction;
module.exports.counter = counter;
module.exports.adder = adder;

/*
This is another alternative
module.exports = {
    counter: counter;
    adder: adder;
};
*/