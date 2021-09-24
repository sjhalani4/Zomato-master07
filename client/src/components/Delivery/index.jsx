import React, {useState, useEffect} from 'react'
import RestaurantCard from '../RestaurantCard';
import Brand from './Brand';

//react-redux
import {useSelector} from 'react-redux'
//carousel
import DeliveryCarousel from './DeliveryCarousel';


const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([
        // {
        // _id:123456,
        // photos :[ "https://b.zmtcdn.com/data/pictures/chains/0/18879350/c9962b005e6f7c576f4cc04bace8195f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
        // name:"Hotel Shree Ras",
        // restaurantReviewValue: 4.0,
        // cuisine: ["North Indian"],
        // averageCost:350,
        // durationOfdelivery:42,
        // isOff:80,
        // ispro:true,
        //  },
        //  {
        //     _id:123456-2,
        //     photos :[ "https://b.zmtcdn.com/data/pictures/chains/0/18879350/c9962b005e6f7c576f4cc04bace8195f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
        //     name:"Hotel Shree Ras",
        //     restaurantReviewValue: 4.0,
        //     cuisine: ["North Indian"],
        //     averageCost:350,
        //     durationOfdelivery:42,
        //     isOff:80,
        //     ispro:true,
        //      },
        //      {
        //         _id:123456-3,
        //         photos :[ "https://b.zmtcdn.com/data/pictures/chains/0/18879350/c9962b005e6f7c576f4cc04bace8195f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
        //         name:"Hotel Shree Ras",
        //         restaurantReviewValue: 4.0,
        //         cuisine: ["North Indian"],
        //         averageCost:350,
        //         durationOfdelivery:42,
        //         isOff:80,
        //         ispro:true,
        //          }
    ]

    );
    const reduxState = useSelector((globalStore)=>globalStore.restaurant.restaurants);
    
    useEffect(()=>{
        reduxState.restaurants&&setRestaurantList(reduxState.restaurants)
    },[reduxState.restaurants]);
    

    return (
        
        <>
            <DeliveryCarousel/>
            {/* <Brand/> */}
            <div className="flex justify-between flex-wrap">

            {
                restaurantList.map((restaurant)=>
                <RestaurantCard {...restaurant} key={restaurant._id}/>
            )
            }
            </div>

        </>
    );
};

export default Delivery;
