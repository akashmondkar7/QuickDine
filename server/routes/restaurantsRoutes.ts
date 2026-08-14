import { Router } from "express";
import { get } from "node:http";
import { getFeaturedRestaurants, getRestaurantAvaibility, getRestaurantBySlug, getRestaurants } from "../controllers/restaurantController.js";

const restaurantRouter =Router();


restaurantRouter.get('/',getRestaurants);
restaurantRouter.get('/featured',getFeaturedRestaurants);
restaurantRouter.get('/:slug',getRestaurantBySlug);
restaurantRouter.get('/:id/availability',getRestaurantAvaibility);

export default restaurantRouter;