import mongoose from "mongoose";

const Blog=mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    author:{
        type:String
    }
},{
    timestamps:true
})

export default mongoose.model("Blog",Blog);