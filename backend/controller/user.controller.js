import bcrypt from 'bcryptjs';
import User from "../model/user.model.js";
import jwt from 'jsonwebtoken'
export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "User already exist" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })
        return res.status(200).json({ message: "user created successfully", userId: newUser._id })

    } catch (error) {
        return res.status(400).json({ message: "signup failed", error: error.message })
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY);
        res.json({token,username:user.username,message:"Login successfull"})
    } catch (error) {
        res.status(500).json({message:"Login failed",error:error.message})
    }

}