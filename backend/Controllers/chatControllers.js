const asyncHandeler = require('express-async-handler');
 const Chat = require("../Models/ChatModel")
const User = require('../Models/UserModel')




const accessChat = asyncHandeler( async(req,res)=>{
    const {userId} = req.body;


    if(!userId){
        console.log("Userid param not sent with request");
        return res.sendStatus(400);
    }


    var isChat = await Chat.find({
        groupChat:false,
        $and:[
            {  users : {$elemMatch : {$eq:req.user._id}}} , 
            {  users : {$elemMatch : {$eq: user._id}}} , 
        ]    
    }).populate("users","-password").populate("latestMsg")

    isChat = await User.populate(isChat, {
        path:'latestMsg.sender',
        select:"name pic email",
    })


    if(isChat.length>0){
        res.send(isChat[0]);
    }else{
        var chatData = {
            chatName : "sender",
            groupChat:false,
            users: [req.user._id ,userId],
        };

        try {
            const createdchat =  await Chat.create(chatData);

            
            const FullChat =  await Chat.findOne({_id:createdchat._id}).populate("users","-password");


            res.status(200).send(FullChat);
        } catch (error) {
            res.status(400);
            throw new Error (error.message);
        }
    }
})

const fetchChat = asyncHandeler ( async(req,res) =>{
   try {
        Chat.find({users: {$eleMatch: {$eq: req.user._id}}}).
        populate("users","-password")
        .populate("groupAdmin" , "-password")
        .populate("latestMsg").sort({updateAt: -1}).
        then(async(results) => {
            results = await User.populate(results,{
                path:'latestMsg.sender',
                select:"name pic email",
            })
            res.status(200).send(results);
        });

   } catch (error) {
    res.status(400);
    throw new Error (error.message);
   }
})


const createGroupChat = asyncHandeler(async (req,res) =>{
    if(!req.body.user || !req.body.name){
        return res.status(400).send({message:"Please fill the Blanks"});
    }




    var users = JSON.parse(req.body.users);

    if(users.length < 2){
        return res.status(400).send("More than 2 users are required to form a group chat");
    }

    users.push(req.user);


    try {
        const groupChat= await Chat.create({
            chatName:req.body.name,
            users:users,
            groupChat:true,
            groupAdmin:req.user, 
        })

            const fullGroupChat =  await Chat.findOne({_id:groupChat._id})
            .populate("users","-password")
            .populate("groupAdmin","-password");


            res.status(200).json(fullGroupChat);

    } catch (error) {
        res.status(400);
        throw new Error (error.message);
    }


})


const renameGroup = asyncHandeler(async(req,res)=>{
    const {chatId , chatName} = req.body;

    const updatedchat = await Chat.findIdAndUpdat(
        chatId,
        {
            chatName,
        },
        {
            new:true,
        }

    ).populate("users","-password")
    .populate("groupAdmin","-password");


    if(!updatedchat){
        res.status(404);
        throw new Error("Chat not found");
    }else{
        res.json(updatedchat);
    }
})

const addGroup = asyncHandeler(async(req,res)=>{
    const {chatId , userId} = req.body;

    const adding = await Chat.findByIdAndUpdate(
        chatId,{
            $push:{users:userId},
        },
        {new:true}
    ).populate("users","-password")
    .populate("groupAdmin","-password");

    if(!adding){
        res.status(404);
        throw new Error("Chat not found");
    }else{
        res.json(adding);
    }
})

const removeGroup = asyncHandeler(async(req,res)=>{
    const {chatId , userId} = req.body;

    const removing = await Chat.findByIdAndUpdate(
        chatId,{
            $pull:{users:userId},
        },
        {new:true}
    ).populate("users","-password")
    .populate("groupAdmin","-password");

    if(!removing){
        res.status(404);
        throw new Error("Chat not found");
    }else{
        res.json(removing);
    }
})

module.exports = {accessChat,fetchChat,createGroupChat,renameGroup,addGroup,removeGroup}