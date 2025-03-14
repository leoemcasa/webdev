import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!!</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
});