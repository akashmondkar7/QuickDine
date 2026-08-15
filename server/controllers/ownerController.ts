import { AuthRequest } from "../middlewares/auth.js";
import { Restaurant } from "../models/Restaurant.js";

// Get owner's restaurant
// Get /api/owner /Restaurant


export const getOwnerRestaurant = async (req:AuthRequest, res:Response):Promise<void>=>{
    try{
        const restaurant = await Restaurant.findOne({owner:req.user?._id})
        if(!restaurnt){
            res.status(200).json(null);
            return;
        }
        res.json(restaurant);

    }catch(error:any){
        console.error(error);
        res.status(400).json({message:error.message});
    }
}


//Create owner's restaurant (submitted to pending)
//POST/api/owner/restaurant

export const createOwnerRestaurant = async (req:AuthRequest, res:Response):Promise<void>=>{
    try{
        const existing =await  Restaurant.findOne({owner:req.user?._id})
        if(existing){
            res.status(400).json({message:"you already have a restaurant registered"})
            return;
        }

        const {name,descripation,cuisine,priceRange,location,address,chef,tags,availableSlots,totalSeats}=req.body;

        if(!name || !descripation || !cuisine || !priceRange || !location || !address || !chef ){
            res.status(400).json({message:"please provide all required fields"})
            return;
        }

        // Generate slug from name

        const slug =name.

        

    }catch(error:any){
        console.error(error);
        res.status(400).json({message:error.message});
    }
}

// update owner's restaurant
// PUT /api/ owner/ rstaurant

export const updateOwnerRestaurant = async (req:AuthRequest, res:Response):Promise<void>=>{
    try{

    }catch(error:any){
        console.error(error);
        res.status(400).json({message:error.message});
    }
}

//Get bookings for owner's restaurant
// GET/api/owner/bookings

export const getOwnerBookings = async (req:AuthRequest, res:Response):Promise<void>=>{
    try{

    }catch(error:any){
        console.error(error);
        res.status(400).json({message:error.message});
    }
}

//Update status of a booking
// PUT /api/owner/bookings/:id/status


export const updateBookingStatus= async (req:AuthRequest, res:Response):Promise<void>=>{
    try{

    }catch(error:any){
        console.error(error);
        res.status(400).json({message:error.message});
    }
}