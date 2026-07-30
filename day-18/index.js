const express = require("express");
const app = express();

const PORT = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.status(200).send("<h1> App is running </h1>");
});

app.listen(PORT, () =>{
    console.log(`Port running at ${PORT}`);
});