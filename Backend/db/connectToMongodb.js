import mongoose from "mongoose";
const connectToMongodb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected To mongodb")
    }catch(error){
        console.log("Error Connecting the mongodb" , error.message)
    }

}

export default connectToMongodb;