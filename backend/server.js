const express = require("express");
const {chats} = require("./Data/data")
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send("API is Running");
})

app.get('/api/chat',(req,res) => {
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
    const singlechat =  chats.find((c)=>c._id === req.params.id);
    res.send(singlechat);
})

const PORT = process.env.PORT || 7000

app.listen(7000,console.log(`Server Started on PORT ${PORT}`));