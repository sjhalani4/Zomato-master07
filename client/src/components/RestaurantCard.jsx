import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {AiTwotoneStar} from 'react-icons/ai'
import { getImage } from '../Redux/Image/Image.action';


const RestaurantCard = (props) => {
    const [image, setImage]=useState({
        images : [],
    });
    const dispatch = useDispatch();
    useEffect(()=>{
        props.photos && dispatch(getImage(props.photos)).then((data)=>setImage(data.payload.image));

    },[props.photos]);
    return (
        <>
        <div className="bg-white p-4 w-full mb-4 transition-duration-700 ease-in-out  hover:shadow-md  md:w-1/2 lg:w-1/3 rounded-2xl relative">
            <div className="w-full h-56 lg:h-64 relative">
              <div className="absolute w-full flex bottom-4 items-end justify-between">
                 <div className="flex flex-col gap-2 items-start">
                     {props.ispro && 
                    (
                    <span className="bg-zomato-400 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
                    )}
                    {props.isOff &&(
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹{`${props.isOff}`} off </span>)}
                </div>

                <span className="bg-white bg-opacity-75 p-1 rounded mr-2">{props.durationOfdelivery} min</span>
            </div>

                {/* <img src={props.photos.length && props.photos[0]} */}
                <img src={image.images.length&&image.images[0].location}
                 alt="food"
                 className="w-full h-full rounded-2xl"
                 />
            </div>
           
            <div className="flex flex-col gap-2 my-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-medium">{props.name}</h4> 
                      <span className="bg-green-800 text-white text-sm flex items-center p-1 rounded ">{props.restaurantReviewValue} <AiTwotoneStar/> </span> 
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                      <p>{props.cuisine.join(", ")}</p>  
                      <p >₹{props.averageCost} for one</p>
                    </div>

            
        </div>

    </div>
            
        </>
    );
}

export default RestaurantCard;
