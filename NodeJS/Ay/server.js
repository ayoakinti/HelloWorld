var http = require("http");
var fs = require("fs");

// Sending json data to server
/*
var server = http.createServer(function (req, res) {
    //console.log("Request was made " + req.url);
    res.writeHead(200, {"Content-Type": "application/json"});
    var myObj = {
        "Name": "Ayo",
        "Job": "Web Developer",
        "Age": 21
    }
    res.end(JSON.stringify(myObj));
});
*/

// Sending from readable stream to server using pipe
// var server = http.createServer(function (req, res) {
//     console.log("Request was made " + req.url);
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     var myReadStream = fs.ReadStream(__dirname + "/readMe.txt", "utf8");
//     myReadStream.pipe(res);
// });

//Sending html file to server
/*
var server = http.createServer(function (req, res) {
    //console.log("Request was made " + req.url);
    res.writeHead(200, {"Content-Type": "text/html"});
    var myReadStream = fs.ReadStream(__dirname + "/index.html", "utf8");
    myReadStream.pipe(res);
});
*/

// Normal Server

// var server = http.createServer(function (req, res) {
//     console.log("Request was made " + req.url);
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hey ninjas");
// });

// server.listen(3000, "127.0.0.1");
// console.log("Hey!! Now listening to port 3000");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hey ninjas");
// });

// server.listen(3000, "127.0.0.1");
// console.log("Now listening to port 3000");


// sending an html file to the server
// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type": "text/html"});
//     fs.createReadStream("index.html", "utf8").pipe(res);
// });

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "application/json"});
    
    // const json = fs.createReadStream("package.json");
    const obj = {
        name: "Ay",
        school: "Unilag",
        age: 21
    };
    res.end(JSON.stringify(obj));
    // json.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("Now listening at port 3000");