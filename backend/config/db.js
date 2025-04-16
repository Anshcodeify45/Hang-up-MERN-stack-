const mongoose = require("mongoose")



const connectMongoDb = async () => {
    try{
        const path = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${path.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectMongoDb;