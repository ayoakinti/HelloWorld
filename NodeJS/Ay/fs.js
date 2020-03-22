var fs = require("fs");

//This is synchronous 
/*
var readMe = fs.readFileSync("readMe.txt", "utf8");
fs.writeFileSync("writeMe2.txt", readMe);
*/

// This is asynchronous
// Other codes down will fire while this is running in the background
// fs.readFile("readMe.txt", "utf8", function(err, data) {
//     fs.writeFile('writeMe.txt', data, function (err, result) {
//         if(err){
//             console.log(err);
//         }
//     });    
// });

fs.readFile("readMe.txt", "utf8", (err, data) => 
    fs.writeFile("writeMe.txt", data, function(err, result) {
        if(err){
            console.log(err);
        }
    }
));