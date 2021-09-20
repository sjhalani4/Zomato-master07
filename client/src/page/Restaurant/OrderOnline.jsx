import React from 'react'

import {AiOutlineCompass} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
//components
import FloatMenuBtn from '../../components/restaurant/Order-Online/FloatMenuBtn';

import FoodList from '../../components/restaurant/Order-Online/FoodList';
import MenuListContainer from '../../components/restaurant/Order-Online/MenuListContainer'



const OrderOnline = () => {
    return (
        <>
           <div className="w-full flex h-screen ">
           <aside className="hidden md:flex flex-col gap-3 overflow-y-scroll border-r border-gray-200 h-screen w-1/4 ">
           <MenuListContainer/> 
           <MenuListContainer/>
           <MenuListContainer/>
           </aside>

            <div className="w-full px-3 md:w-3/4 ">
                <div className="pl-3 mb-4">
                <h2 className="text-xl font-semibold">Order-Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
            <AiOutlineCompass/> Live Track Your Order | <BiTimeFive/> 45 min
            </h4>
            </div>
            <section className="flex flex-col gap-3 h-screen overflow-y-scroll md:gap-6">
                <FoodList title="Recommended" items={[
                    {

                    image:"https://b.zmtcdn.com/data/dish_photos/a21/89037ae7a72e341bec0aa6519f901a21.jpg?output-format=webp",
                    price:"1000",
                    title:"Tawa Roti" ,
                    rating:"3" ,
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam sed, maxime magnam eius maiores eaque optio excepturi consequatur assumenda id veritatis cumque, voluptas quisquam fugit ratione, alias corporis laudantium"

                    },
                   ]} />
                
                   
            </section>
            </div>
           </div>
               
               <FloatMenuBtn/>
                
        </>
    );
};

export default OrderOnline;

