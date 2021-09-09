import React from 'react'
import {TiStarFullOutline} from 'react-icons/ti'

const RestaurantInfo = (props) => {
    return (
        <div>
             <div className="my-4">
         <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-3">
             <h1 className="text-xl md:text-3xl font-semibold md:font-bold">{props.name}</h1>
             <div className="flex items-center gap-6 text-xs md:text-base">
                 
                 <div className="flex items-center  gap-2"> 
                     <span className=" flex items-center gap-2  text-white   bg-green-600 py-1 px-2 rounded-lg">
                        {props.restaurantRating} <TiStarFullOutline/>
                     </span>
                     <span>
                     <strong>110</strong>
                     <p className="border-b border-dashed border-gray-300">Dining reviews</p>
                     </span>
                     </div>
                     <div className="flex items-center gap-1">
                     <span className=" flex items-center gap-2  text-white   bg-green-600 py-1 px-2 rounded-lg">
                     {props.deliveryRating} <TiStarFullOutline/>
                     </span>
                     <span>
                     <strong>110</strong>
                     <p className="border-b border-dashed border-gray-300">Delivery reviews</p>
                     </span>
                 </div>
             </div>
         </div>
         <div className="text-base  md:text-lg text-gray-600">
             <h3>{props.cuisine}</h3>
             <h3 className="text-gray-400">{props.address}</h3>
             <h3><span className="text-yellow-500">Open Now</span> - 11am - 8pm</h3>
         </div>

         </div>  
        </div>
    )
}

export default RestaurantInfo;
