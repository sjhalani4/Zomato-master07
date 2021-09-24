import React, {useEffect} from 'react'
import { IoTimeSharp } from 'react-icons/io5';
import {useParams} from 'react-router-dom'
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/Night life';
import Nutrition from '../components/Nutrition';
import { useDispatch } from 'react-redux';

//redux actions
import {getRestaurant} from '../Redux/Reducer/restaurant/restaurant.action';


const Home = () => {
    const  {type}=  useParams();
   const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRestaurant());
    },[]);

    return (
        <div className="my-5">
       {type === "delivery" && <Delivery/>}
       {type=== "dining" && <Dining/>}
       {type==="night" && <NightLife/>}
       {type==="nutri" && <Nutrition/>}
        
           
        </div>
    );
};

export default Home;
