const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("hello");
});

app.get("/roledice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("roledice.ejs", {diceVal});
})

app.listen(PORT, () =>{
    console.log(`Port running at ${PORT}`);
});