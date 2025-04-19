const express = require("express");
const {chats} = require("./Data/data")
const dotenv = require("dotenv");
const connectMongoDb = require("./config/db");
const userRoutes = require('./Routes/userRoutes');
const {notFound ,errorHandeling} =require("./middileware/errorHandeling")
dotenv.config();

connectMongoDb();
const app = express();

app.use(express.json()) //accepting json 

app.use('/api/user',userRoutes);

app.use(notFound);

app.use(errorHandeling);

app.get('/api/chat/:id',(req,res)=>{
    const singlechat =  chats.find((c)=>c._id === req.params.id);
    res.send(singlechat);
})

const PORT = process.env.PORT || 7000

app.listen(7000,console.log(`Server Started on PORT ${PORT}`));