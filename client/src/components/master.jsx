import React from 'react'
import { IoTimeSharp } from 'react-icons/io5';
import {useParams} from 'react-router-dom'
import Delivery from './Delivery';

const Master = () => {
    const  {type}=  useParams();
    return (
        <>
       {type === "delivery" && <Delivery/>}
        
           
        </>
    );
};

export default Master;
