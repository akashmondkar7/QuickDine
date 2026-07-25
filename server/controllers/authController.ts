import { Request, Response } from "express";
import jwt, { JsonWebTokenError } from 'jsonwebtoken'

// Helper to generate JWT token

const generateToken =(id:string)=>{
   return jwt.sign({id},process.env.JWT_SECRET as string ,{expireIn:"30d"})
}


// Register a new user
// POST /api/auth/register



export const registerUser =async (req:Request,res :Response): Promise<void> => {
    try {
       const {name,email,password,phone,role}=req.body 
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