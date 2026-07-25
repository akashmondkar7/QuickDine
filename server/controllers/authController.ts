import { Request, Response } from "express";
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
// Helper to generate JWT token

const generateToken =(id:string)=>{
   return jwt.sign({id},process.env.JWT_SECRET as string ,{expireIn:"30d"})
}


// Register a new user
// POST /api/auth/register



export const registerUser =async (req:Request,res :Response): Promise<void> => {
    try {
       const {name,email,password,phone,role}=req.body ;
       if( !name || !email || !password){
        res.status(400).json({message:"please enter all required fields"})
      return; 
    }
     //check if user exists
     const  userExists =await User.findOne({email})

     if(!userExists){
        res.status(400).json({message:"user already exists"})
        return;
     }
      // hash password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword

    } catch (error) {
        
    }
}
// get /api/auth/login

export const loginUser =async (req:Request,res :Response): Promise<void> => {
    try {
        
    } catch (error) {
        
    }
}


export const getme =async (req:Request,res :Response): Promise<void> => {
    try {
        
    } catch (error) {
        
    }
}