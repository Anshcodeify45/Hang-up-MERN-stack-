const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{type:String , require:true},
    email:{type:String , require:true ,unique:true},
    password:{type:String , require:true},
    pic:{type:String , require:true , default:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"},

    
},{
    timestamp:true,
});


userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };


userSchema.pre("save",async function (next){
    if(!this.isModified){
     return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})

const User = mongoose.model("User" , userSchema);


module.exports = User;