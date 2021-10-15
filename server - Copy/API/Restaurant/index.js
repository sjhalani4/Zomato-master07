// libraries
import  express  from "express";
import passport from "passport";


//database model
import {RestaurantModel} from "../../database/allModels";
import {ValidateRestaurantId} from "../../Validation/food";

const Router = express.Router();
  
/*
Route     /
Des       Get all the restaurant details based in city
Params    none
Access    Public
Method    GET 
*/
Router.get("/",async (req,res)=> {
try {
    const {city} = req.query;
    const restaurants = await RestaurantModel.find({ city });
    return res.json({restaurants});
} catch (error) {
     return res.status(500).json({ error: error.message });
}
});

/*
Route     /
Des       Get individual restaurant details based on id
Params    id
Access    Public
Method    GET 
*/
Router.get("/:_id", async (req, res)=> {
    try {
        await ValidateRestaurantId(req.params);  
        const {_id}= req.params; 
        const restaurant = await RestaurantModel.findById(_id);
        if(!restaurant) return res.status(404).json ({error:"Restaurant Not Found" });
        return res.json({restaurant});

        
    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }
});

/*
Route     /search
Des       Get restaurant details based 0n search string
Params    none
Body      searchString
Access    Public
Method    GET 
*/
Router.get("/search" , async (req,res)=>{
try {
    const {searchString} = req.body;
    const  restaurants = await RestaurantModel.find({
        name:{ $regex:searchString, $options:"i" }, 
    });
    if(!restaurants) return res.status(404)
    .json({error:`No Restaurant matched with ${searchString} `});
} catch (error) {
    return res.json(500).json({error:error.message});
    
}

}); 
// @Route   POST /restaurant/new
// @des     add new restaurant
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newRetaurant = await RestaurantModel.create(req.body.retaurantData);
      return res.json({ restaurant: newRetaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   PATCH /restaurants/update
  // @des     update exisitng restaurant data
  // @access  PRIVATE
  Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
      const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
        req.body.retaurantData._id,
        { $set: req.body.retaurantData },
        { new: true }
      );
      if (!updatedRestaurant)
        return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });
  
      return res.json({ restaurants: updatedRestaurant });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   DELETE /restaurant/delete
  // @des     update exisitng restaurant data
  // @access  PRIVATE
  Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
      const deleteRestaurant = await RestaurantModel.findByIdAndRemove(
        req.body.retaurantData._id
      );
      return res.json({ restaurant: Boolean(deleteRestaurant) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  


export default Router;