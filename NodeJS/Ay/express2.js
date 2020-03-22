var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Allows you use the views folder with the various routes
app.set("view engine", "ejs");

// Allows you implement styling on a seperate stylesheet
app.use("/styles", express.static("styles"));

// HTTP Methods
// GET = type a url into an address bar .get("route", fn)
// POST = post a data to a server .post("route", fn)
// DELETE = .delete("route", fn) 

app.get("/",(req, res) => {
    res.render("index.ejs");
});

app.get("/package",(req, res) => {
    res.sendFile(__dirname + "/package.json");
});

app.get("/text",(req, res) => {
    res.sendFile(__dirname + "/readMe.txt");
});

app.get("/home",(req, res) => {
    res.render("index.ejs");
});

app.get("/contact",(req, res) => {
    res.render("contact.ejs", {qs : req.query});
});

app.post("/contact", urlencodedParser, (req, res) => {
    if(req.body.name && req.body.dept && req.body.email){
        res.render("contact-success.ejs", {contact : req.body});
    } else {      
        setTimeout(() => {
            res.render("contact.ejs", {qs : req.query});
        }, 3000);
    }
});

app.get("/profile/:name",(req, res) => {
    const data = {age: 21, job: "Developer", hobbies: ["Coding", "Gaming", "Dancing"]};
    res.render("profile", {name : req.params.name, data: data});
});

app.listen(5500);
console.log("jdhsj");



