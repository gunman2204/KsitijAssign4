const User=require('../models/User')
const jwt =require('jsonwebtoken');
const dotenv=require('dotenv');

dotenv.config();
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_secret,{
        expiresIn:'30d',
    });
};

exports.registerUser = async (req,res) => {
    const { username,password}=req.body;
    try{
        // const userExists=await User.findOne({username})
        // if(userExists){
        //     return res.status(400).json({message:'User already Exists'});

        // }
        const user=await User.create({
            username,
            password,
        });
        // if(user){
        //     res.status(201).json({
        //         _id:user._id,
        //         username: user.username,
        //     });
        // }
        // else{
        //     res.status(400).json({message:'Invalid user data'});
        // }
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}
exports.loginUser=async(req,res)=>{
    console.log(req.body);
    const {username,password}=req.body;
    try{
        const user=    await User.findOne({username});
    if(user || (await user.matchPassword(password))){
        // res.json({
        //     _id:user._id,
        //     username:user.username,
        //     token:generateToken(user._id)
        // });
        console.log('Logged In')
    }
    else{
        res.status(401).json({message:"Invalid credentials"})
    }
}
    catch(err){
        res.status(500).json({message:err.message});
    }
}
