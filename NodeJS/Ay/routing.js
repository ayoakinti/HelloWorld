var http = require("http");
var fs = require("fs");

// var server = http.createServer(function (req, res) {
//     console.log("Reading from: " + req.url);
//     if (req.url === "/home" || req.url === "/")
//     {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
//     }
//     else if (req.url === "/note")
//     {
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         fs.createReadStream(__dirname + "/readMe.txt", "utf8").pipe(res);
//     }
//     else if (req.url === "/json")
//     {
//         res.writeHead(200, {"Content-Type": "application.json"});
//         var myArr = [{"Name": "Ayomide", "Place of work": "Rhapsody", "Age": 21}, {"Name": "Tobi", "Place of work": "Wallets", "Age": 23}];
//         res.end(JSON.stringify(myArr));
//     }
//     else
//     {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
//     }
// });

// server.listen(8080, "127.0.0.1");
// console.log("Server is listening on port 8080");

const server = http.createServer((req, res) => {
    if(req.url === "/" || req.url === "/home"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if (req.url === "/package"){
        res.writeHead(200, {"Content-Type": "application/json"});
        fs.createReadStream("package.json").pipe(res);
    } else if (req.url === "/readme"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        fs.createReadStream("readMe.txt").pipe(res);
    }else {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("404.html").pipe(res);
    }
});

server.listen(8080, "127.0.0.1");
console.log("Ay, listening at port 8080");