import React from 'react'
import Slider from 'react-slick';
import {IoMdArrowDropright} from 'react-icons/io';


const PictureCarousalCard = () => {
    return (
        <>

        <div className="w-full h-64 relative  px-4 overflow-hidden ">
            <div className="w-full h-full relative ">
        <img src="https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp"
         alt="food"
         className="w-full h-full  object-cover transition-duration-700 ease-in-out rounded-lg"  />
            
            <div className="absolute w-full h-full inset-0  rounded-lg "
             style={{
                 background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                  }}
                   /> 
                     </div>          

            
            
            
            <div className="absolute w-full left-8 bottom-2 text-white ">
               <h4>Onam Special</h4>
               <h6 className="flex items-center">15 Special <IoMdArrowDropright/> </h6>
               

            </div>
            
            
        
        {/* <div className="w-full absolute h-full"  style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)", zIndex:"-3",
                        }}/> */}
            
        
        </div>
            
        </>
    )
}

export default PictureCarousalCard;
