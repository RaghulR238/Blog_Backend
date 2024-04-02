import express from "express";
import mongoose from "mongoose";
import { UploadedBlog, createBlog, deleteBlog, displayAll, display_By_Id } from "./controller.js";
import cors from "cors";

const app=express();
console.log("hello")

app.use(cors({  
    origin:"*"    // provide which client have access for mangoDB 
    // * to allow all website // localhost:3000 to allow that only
}));

app.use(express.json());

async function connect()
{
    await mongoose.connect("mongodb+srv://717821l238:WStW1oqCS3LPNPBw@cluster0.ryc0weh.mongodb.net/?retryWrites=true&w=majority&&dbname=blog");
    console.log("mongoDB connected");
}
app.get("/",(req,res)=>{
    res.send("Blogging");
})

app.post("/createBlog",createBlog);
app.put("/updateBlog/:Id",UploadedBlog);
app.delete("/deleteblog/:Id",deleteBlog);
app.get("/displayAll",displayAll);
app.get("/display/:title",display_By_Id);



app.listen(3001,()=>{
    connect();
    console.log("Server started working");
})