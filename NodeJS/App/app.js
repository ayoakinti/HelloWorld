var express = require("express");
var todoController = require("./controllers/todoController");

var app = express();

// Set template engine
app.set("view engine", "ejs");

// Static file
app.use("/assets", express.static("assets"));

todoController(app);

app.listen(3000);
console.log("You are listening at port number 3000");