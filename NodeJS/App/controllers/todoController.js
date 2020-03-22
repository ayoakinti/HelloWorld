var todos = [
    {item: "Study Rhapsody of Realities"},
    {item: "Pray for at least 10 minutes"},
    {item: "Leave the house before 6am"},
    {item: "Code for at least 2 hours before 9am"}
];

module.exports = (app) => {

    app.get("/todo", (req, res) => {
        res.render("todo", {todos: todos});
    });

    app.post("/todo", (req, res) => {

    });

    app.delete("/todo", (req, res) => {

    });
};

