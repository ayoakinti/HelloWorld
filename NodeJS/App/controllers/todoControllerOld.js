var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var todos = [
    {item: "Study Rhapsody of Realities"},
    {item: "Pray for at least 10 minutes"},
    {item: "Leave the house before 6am"},
    {item: "Code for at least 2 hours before 9am"}
];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {

    app.get("/todo", (req, res) => {
        res.render("todo", {todos: todos});
    });

    app.post("/todo", urlencodedParser, (req, res) => {
        todos.push(req.body);
        res.json(todos);
        // console.log(todos);
        // console.log(req.body);
    });

    app.delete("/todo/:item", (req, res) => {
        console.log(req.params.item);
        console.log(req.params);
        console.log(req.url);
        // todos.forEach((todo) => {
        //     console.log(todo.item.replace(/ /g, "-"));
        // });
        // console.log(item);
        // console.log("Study-Rhapsody-of-Realities");
        todos = todos.filter((todo) => {
            // return todo.item.replace(/ /g, "-") !== "Study-Rhapsody-of-Realities";
            // return todo.item.replace(/ /g, "-") !== "Leave-the-house-before-6am";
            return todo.item.replace(/ /g, "-") !== req.params.item;            
        });
        res.json(todos);
        console.log(todos);
    });
};
