const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.send("hello from server");
})

app.get("/home", (req,res)=>{
    res.render("index", {username: "testuser"});
})

app.get("/profile/:username", (req,res)=>{
    res.render("profile", {username: req.params.username});
})

app.listen(5000, ()=>{
    console.log("Server is up and running at port 5000");
})