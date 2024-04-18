import User from "./user.Scheme.js";


export  async function login(req,res)
{
    console.log("Trying to loginn");
    const filters={email:req.body.email};
    console.log(filters);   
    const data=await User.find(filters);
    console.log(data);
    if(data.length==0)
    {
        try
        {
            const user=new User(req.body);
            const userAdding=await user.save();
            console.log("New user added");
            res.status(201).json(user);
        }
        catch(er)
        {
        console.log(er);
        res.status(500).send(er.message);
        }
    }
    else{
        res.status(403).send("User Already exixts");
    }
}

export async function checkLogin(req,res,next)
{
    const filter={email:req.body.email,password:req.body.password};
    const data=await User.find(filter);
    if(data.length==0)
    {
        console.log("Login or signUp");
        res.status(404).send("Login or signUp");
    }
    else{
        next();
    }
}