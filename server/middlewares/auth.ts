import { NextFunction, Request } from "express";
import { IUser, User } from "../models/user.js";
import { Jwt } from "jsonwebtoken";


export interface AuthRequest extends Request{
    user?:IUser;

}

export const protect = async (req:AuthRequest,res:Response,next:NextFunction): Promise< void> => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            // Get token from header
            token=req.headers.authorization.split("")[1];

            // verify token 
            const decoded = Jwt.verify(token, process.env,JWT_SECRET!) as {id:string}
            // Get user from the token , exclude password
             const user = await User.findById(decoded.id).select("-password")
             if(!user){
                res.status(401).json({message:"Not authorized, user not found"})
                return;
             }
             req.user=user;
             next()

        } catch (error) {
           console.error("Auth Middleware Error:",error)
           res.status(401).json({message:"Not authorized, token failed"})
           return;
        }
    }
    if(!token){
        res.status(401).json({message:"Not Authorized,user not found"})
        return;
    }
}

export const adminOnly=(req:AuthRequest,res:Response,next:NextFunction)=>{

}

