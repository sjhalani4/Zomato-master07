import classNames from 'classnames';
import React from 'react'
import { TiStarOutline } from 'react-icons/ti';


const InfoButtons = (props) => {
    return (
        <>
           <button className={classNames(
               "flex items-center gap-3  border border-zomato-400 px-4 py-2 rounded-lg" ,
               {
                "text-white bg-zomato-400":props.isActive
               }
           )}>
            {props.children}
                 </button> 
        </>
    )
}

export default InfoButtons;
