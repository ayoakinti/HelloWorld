var myArray = [["Ayomide", 1], ["Akintimehin", 2], ["Olawale", 3], [4, 5, 6], [[7, 8, 9], [10, 11, 12], 13, 14, 15]];
var number = myArray[4][1][2];
console.log(number);

var array2 = [20, 30, 40, 50];

// Add name/number at end of array
array2.push(60, 70, 80, 90, 100);
array2[9] = 110;
console.log(array2);

// Remove name/number from end of array and returns it
var arrayPop = array2.pop() ;
console.log(array2);
console.log("arrayPop: " + arrayPop);

// Remove name/number from beginning of array and returns it
var arrayshift = array2.shift();
console.log(array2);

// Add name/number to biginning of an array
var arrayunshift = array2.unshift(20);
console.log(array2);
