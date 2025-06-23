import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'
export const signup=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const userExist=await User.findOne({email})
        if(userExist){
            res.status(400).json({message:"User already exist"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await User.create({
            username,
            email,
            password:hashedPassword
        })
        res.status(200).json({message:"user created successfully",userId:newUser._id})
        
    } catch (error) {
        res.status(400).json({message:"signup failed",error:error.message})
    }

}