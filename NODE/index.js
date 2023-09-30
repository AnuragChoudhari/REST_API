const express = require('express');

const app = express();

let count = 0;

app.use(function(res,res, next){
    count = count + 1;
    next();
})

app.get("/", (req,res)=>{
    res.send("Hello word ");
})

app.get("/profiles", (req,res)=>{
    res.send(`Profiles visit count : ${count}` );
})

app.listen(8000, ()=>{
    console.log('Listening at port 8000');
})