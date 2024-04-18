import mongoose from "mongoose";

const User=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    }
})

export default mongoose.model("User",User);