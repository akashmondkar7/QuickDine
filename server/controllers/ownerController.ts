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

        const slug =name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+g,"");

        const slugExists= await Restaurant.findOne({slug});
        if(slugExists){
            res.status(400).json({message:"A restaurant with this name already exists"});
            return;

        }

        // Handle image

        let imageUrl="";
        if(req.file){
           // handle image upload
           
        }

        //setup parsed tags and slots

        const parsedTags =typeof tags ==="string" ? tags.split(",").map((t)=>t.trim()):tags ||[];
        const parsedSlots = typeof availableSlots === "string" ? availableSlots.split(",").map((s)=> s.trim()): availableSlots || ["17:00","18:00","19:00","20:00","21:00"];

        const restaurant = await Restaurant.create({
            name,
            slug,
            description,
            cuisine,
            priceRange,
            location,
            address,
            chef,
            image:imageUrl,
            tags:parsedTags,
            availableSeats:parsedSlots,
            totalSeats:totalSeats ? Number(totalSeats):20,
            owner:req.user?._id,
            status:"pending"
        })


        res.status(201).json(restaurant);

        

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