import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //res.send(`Hello! ${today}`);
    let today = new Date().getDay();
    let day = "weekday";
    let message = "work hard";
    if (today == 0 || today == 6) {
        day = "weekend";
        message = "have fun";
    }
    res.render("indexSol.ejs", { dayT: day, messageT: message });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});