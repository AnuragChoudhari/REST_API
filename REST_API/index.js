const express = require('express');
const app = express();



const PORT = 8080;


app.use(express.json());


app.get("/", (req,res)=>{
    res.send("Hello I'm express");
})

app.get("/tshirt", (req,res)=>{
    res.status(200).send({
        tshirt: '🗿',
        size: 'large'
    })
})

app.post("/tshirt/:id", (req,res)=>{
    const { id } = req.params;
    const {logo} = req.body;

    if(!logo){
         res.status(418).send("We need a logo!");
    }
    
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`
    })

})

app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
})