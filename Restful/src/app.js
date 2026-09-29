const express = require("express");

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Uday" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
];

// GET
app.get("/users", (req, res) => {
    res.send(users);
});

// POST
app.post("/users", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(user);
    res.send(user);
});

// PUT
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    user.name = req.body.name;

    res.send(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    users = users.filter(u => u.id !== id);

    res.send("User deleted successfully");
});

app.listen(4000, () => {
    console.log("API running at port 4000");
});