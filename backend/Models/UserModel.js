const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name:{type:String , require:true},
    email:{type:String , require:true ,unique:true},
    password:{type:String , require:true},
    pic:{type:String , require:true , default:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"},

    
},{
    timestamp:true,
});



const User = mongoose.model("User" , userSchema);


module.exports = User;