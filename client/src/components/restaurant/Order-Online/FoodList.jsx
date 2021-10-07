import React from 'react'
//component
import FoodItem from './FoodItem';


const FoodList = (props) => {
  
    return (
        <>
           <div>
                <h2 className="text-xl font-semibold sticky top-0  bg-white w-full z-10">{props.name}</h2>
               <div className="flex flex-col gap-3">
               { props.items.map((item)=>(
                   <FoodItem key={item} _id={item}/>

               ))}
               </div>
        </div>
        </>
    );
};


export default FoodList;
