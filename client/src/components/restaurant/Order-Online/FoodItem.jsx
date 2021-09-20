import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {GoPlusSmall} from "react-icons/go"

const FoodItem = (props) => {
    return (
        <>
          <div className="flex items-start md:justify-between gap-2"> 
             <div className="w-3/12  h-24 md:h-28 lg:h-36 md:px-3">
                 <img src={props.image} alt="food" className="w-full h-full object-cover rounded-lg" />
                 </div> 
                 
             <div className="w-9/12 md:w-7/12 flex flex-col gap-1">
                 <div className="flex items-center justify-between">
                 <h3 className="text-xl font-semibold">{props.title}</h3>  
                 
                 <button className="md:hidden text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg flex justify-items-center">
                     Add <GoPlusSmall/>
                 </button>
                 </div> 
                 <ReactStars count={5} value={props.rating}/>

                
                 <h5>₹{props.price}</h5>
                 <p className="truncate">{props.description}</p>
                 </div>
                 
             
             <div className="hidden md:block w-2/12">
                 <button className="text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-1 rounded-lg flex justify-items-center">
                     Add <GoPlusSmall/>
                 </button>
             </div>
              
              </div>  
        </>
    );
};

export default FoodItem;
