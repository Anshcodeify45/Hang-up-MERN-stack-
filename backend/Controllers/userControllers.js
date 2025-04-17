const asyncHandeler = require('express-async-handler');
const User = require('../Models/UserModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandeler(async(req,res)  => {
   const {name , email, password ,pic } = req.body;

   if(!name || !email || !password){
    resizeBy.status(400);
    throw new Error("Please Enter all the Feilds");
   }


   const userExist = await  User.findOne({email});

   if(userExist){
    res.status(400);
    throw new Error("User already exist");
   }

   const user = await User.create({
    name,
    email,
    password,
    pic,
    token:generateToken(user._id),
   })

   if(user){
    res.status(201).json({
        _id: user._id,
        name:user.name,
        email:user.email,
        pic:user.pic,
    })
   }else{
    res.status(400);
    throw new Error("Failed to Create new user");
   }
});

module.exports = {registerUser};
