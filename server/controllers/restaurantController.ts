

// Get all restaurants with search and filters
// GET/api/restaurants

import { Request, Response } from "express";
import { Restaurant } from "../models/Restaurant.js";

 export const getRestaurants = async (req: Request, res: Response): Promise<void> => {
   try {
    const{search,priceRange,rating,location,sort}= req.query;



    //Build Query object
    const queryObj:any={status:"approved"}
    
    if(search){
      queryObj.$or =[
        {name:{$regex:search, $option:"i"}},
        {tags:{$regex:search, $option:"i"}},
        {location:{$regex:search, $option:"i"}}

      ]
    }

    if(priceRange){
      const prices = Array.isArray(priceRange)? priceRange:[priceRange];
      queryObj.priceRange={$in:prices}
    }

     if(rating){
      
      queryObj.rating={$gte:parseFloat(rating as string)};
    }

    if(location){
      
      queryObj.location={$regex:location as string,$options:"i"};
    }

    // sorting

    let sortOption: any ={createdAt:-1}

    if(sort === "rating"){
      sortOption ={rating:-1}
    } else if (sort === "price_low") {
      sortOption={priceRange:1};
    }else if (sort === "price_high"){
      sortOption={priceRange:-1}
    }

    const restaurant = await Restaurant.find(queryObj).sort(sortOption);
    res.json(restaurant);



   } catch (error:any) {
     console.error(error);
     res.status(400).json({message:error.message});
   }
    
 }

 // Get Featured with exclusive restaurants
 // GET /api/ restaurants/featured

 export const getFeaturedRestaurants = async (req:Request,res:Response) : Promise<void>=> {
   try {
    
    
   } catch (error:any) {
     console.error(error);
     res.status(400).json({message:error.message});
   }
}

// get single restaurant  by slug
// GET /api/restaurants/:slug
export const getRestaurantBySlug = async (req:Request,res:Response) : Promise<void>=> {
   try {
    
    
   } catch (error:any) {
     console.error(error);
     res.status(400).json({message:error.message});
   }
}


// get dynamic seat availabilty for slots
// GET /api/restaurants/:id/avaibility
export const getRestaurantAvaibility= async (req:Request,res:Response) : Promise<void>=> {
   try {
    
    
   } catch (error:any) {
     console.error(error);
     res.status(400).json({message:error.message});
   }
}