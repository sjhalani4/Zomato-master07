import React from 'react'
import { IoTimeSharp } from 'react-icons/io5';
import {useParams} from 'react-router-dom'
import Delivery from './Delivery';
import Dining from './Dining';
import NightLife from './Night life';

const Master = () => {
    const  {type}=  useParams();
    return (
        <div className="my-5">
       {type === "delivery" && <Delivery/>}
       {type=== "dining" && <Dining/>}
       {type==="night" && <NightLife/>}
        
           
        </div>
    );
};

export default Master;
