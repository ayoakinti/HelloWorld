// var express = require("express");
// var bodyParser = require("body-parser");

// var app = express();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.set("view engine", "ejs");

// app.use("/styles", express.static("styles"));

// app.get("/", function (req, res) {
//     res.render("index"); 
//  });

// app.get("/contact", function (req, res) {
//     res.render("contact");
// });

// app.post("/contact", urlencodedParser, function (req, res) {
//     console.log(req.body);
//     res.render("contact-success", {"database": req.body});
// });

// app.get("/text", function (req, res) {
//     res.sendFile(__dirname + "/readMe.txt"); 
//  });

// app.get("/profile/:name/:age", function (req, res) {
//     //res.send("You requested to see the profile with the id of " + req.params.name);
//     var data = {"Job": "Web Developer", "Status": "Begineer"};
//     var Hobbies = ["Swimming", "Cooking", "Jogging", "Gaming", "Coding"];
//     res.render("profile", {
//         "person": req.params.name,
//         "Age": req.params.age,
//         "Data": data,
//         "Hobbies": Hobbies
//     });
// });
 
// app.listen(3000);