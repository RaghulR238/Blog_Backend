import Blog from "./schema.js"

export  async function createBlog(req,res)
{
    console.log("Creating a blog");
    console.log(req.body);
    try
    {
        const blog=new Blog(req.body);
        const blogUpload=await blog.save();
        console.log("Blog Uploaded");
        res.status(201).json(blogUpload);
    }
    catch(er)
    {
        console.log(er);
        res.status(500).send(er.message);
    }
}

export  async function UploadedBlog(req,res)
{
    console.log("Updating a blog");
    try
    {
        console.log(req.body.title);
        const id1=req.params.Id;
        const data_from_id=await Blog.findByIdAndUpdate(id1,{title:req.body.title,content:req.body.content,author:req.body.author});
        console.log(data_from_id);
        res.status(201).json(data_from_id);
    }
    catch(er)
    {
        console.log(er);
        res.status(500).send(er.message);
    }
}

export  async function deleteBlog(req,res)
{
    console.log("Updating a blog");
    try
    {
        const data_from_id=await Blog.findByIdAndDelete(req.params.Id);
        // console.log(data_from_id);
        res.status(201).send("Blog deleted");
    }
    catch(er)
    {
        console.log(er);
        res.status(500).send(er.message);
    }
}

export  async function displayAll(req,res)
{
    console.log("Display All");
    try
    {
        const data_from_id=await Blog.find();
        
        res.status(201).json(data_from_id);
    }
    catch(er)
    {
        console.log(er);
        res.status(500).send(er.message);
    }
}

export  async function display_By_Id(req,res)
{
    console.log("Display ");
    console.log(req.params.title);
    const filters={title:req.params.title.trim};
    try
    {
        const data_from_id=await Blog.find(filters);
        console.log(data_from_id);
        res.status(201).json(data_from_id);
    }
    catch(er)
    {
        console.log(er);
        res.status(500).send(er.message);
    }
}