import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti';

const ReviewCard = () => {
    return (
        <>
         <div className="flex flex-col gap-3">
             <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full">
                  <img src="https://b.zmtcdn.com/data/user_profile_pictures/894/a20702dfcc97b72855e9c8cb5c49a894.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                  alt="avatar" 
                  className="w-full h-full rounded-full object-cover"/>   
                </div>
                     <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">Kunal Thakre</h3>
                    <small className="text-gray-500 "> 3 reviews &bull; 0 Followers</small>
                    </div>
                     
                     </div>  
                    <div>
                        <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg" > Follow </button>
                    </div>
                        
                    
                
             </div>
        <div className=" my-3 flex flex-col gap-3">
            <div className="flex items-center gap-3" >
                <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1 ">
                    3 <TiStarFullOutline />
                </span>
                <h5 className="font-regular uppercase ">Delivery</h5>
                <small className="text-gray-500 ">3 days ago</small>
            </div>
            <div className="w-full ">
                <p className="w-full text-gray-600 font-light text-base">
                cabbage is more thn chicken.
                bad experience.
                waste of money.
                
                </p>
            </div>
        </div>
        </div>   
        </>
    )
}

export default ReviewCard;
