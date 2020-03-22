var http = require("http");
var fs = require("fs");

// READABLE STREAMS AND WRITABLE STREAMS

// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// Short method
// myReadStream.pipe(myWriteStream);

// Long method
/*
myReadStream.on("data", function (chunk) {
    console.log("New chuck received:");
    myWriteStream.write(chunk);
})
*/

// const readStream = fs.createReadStream("readMe.txt", "utf8");
// const writeStream = fs.createWriteStream("writeMe.txt");
// const writeStream2 = fs.createWriteStream("writeMe2.txt");

// readStream.on("data", data => {
//     console.log("new stream incoming");
//     writeStream.write(data);
// });
    
// Using pipes
// readStream.pipe(writeStream2);

const server = http.createServer((req, res) => {
    console.log(`Request was made at ${req.url}`);
    res.writeHead(200, {"Content-Type": "text/plain"});
    fs.createReadStream("readMe.txt", "utf8").pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("now listening at port 3000");
// console.log(`Request was made at ${req.url}`);