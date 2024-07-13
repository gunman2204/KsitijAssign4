const Location = require('../models/Location');
const jwt =require('jsonwebtoken');
const dotenv=require('dotenv');

dotenv.config();

// const generateToken=(id)=>{
//     return jwt.sign({id},process.env.JWT_secret,{
//         expiresIn:'30d',
//     });
// };

exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.saveLocation=async(req,res)=>{
  const {temp,humidity,cityname,wind,condition}=req.body;
  console.log(req.body)
  try {
    const newlocation= await Location.create({
      temp,humidity,cityname,wind,condition
    });
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

exports.deleteLocation=async(req,res)=>{
  try {
      const location=await Location.findByIdAndDelete(req.params.id);
      if(!location){
          return res.status(404).json({message:'Location not found'});
      }
      res.status(200).json({ message:'Location deleted successfully'});
  } catch (error) {
      console.log(error);
      res.status(500).json({message:'server error'})
     
  }
};
