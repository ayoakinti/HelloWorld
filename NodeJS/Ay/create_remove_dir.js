var fs = require("fs");

// To remove a directory
/*
fs.unlink("writeMe.txt", function (err, result) {
    if (err){
        console.log("error", err);
    }    
});
*/

// To create a directory
// Synchronous 
/*
fs.mkdirSync("stuff"); // To create
fs.rmdirSync("stuff"); // To remove
*/

// ASynchronously
/*
fs.mkdir("stuff", function () {
    fs.readFile("readMe.txt", "utf8", function (err, data) {
        fs.writeFile("./stuff/writeMe.txt", data, function (err, result) {
            if (err){
                console.log("error", err);
            };
        });        
    });
});
*/

// To remove Directory and 
/*
fs.unlink("./stuff/writeMe.txt", function () {
    fs.rmdir("stuff", function (err) {
        if (err){
            console.log("error", err);
        }
    });
})
*/

// fs.unlink("writeMe.txt", (err, result) => {
//     if(err){
//         console.log(err);
//     }
// });

// fs.mkdir("stuff", (err, result) => 
//     fs.readFile("readMe.txt", "utf8", (err, data) => 
//         fs.writeFile("./stuff/writeMe.txt", data, (err, result) => {
//             if(err){
//                 console.log(err);
//             }
//         })
//     )
// );

// fs.unlink("./stuff/writeMe.txt", (err, result) => 
//     fs.rmdir("stuff", (err, result) => {
//         if(err){
//             console.log(err);
//         }
//     })
// );

