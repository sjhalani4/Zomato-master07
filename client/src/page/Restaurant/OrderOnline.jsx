import React from 'react'
//components
import FloatMenuBtn from '../../components/restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../components/restaurant/Order-Online/MenuListContainer'

const OrderOnline = () => {
    return (
        <>
           <div className="w-full ">
           <aside className="hidden md:flex flex-col gap-3 overflow-y-scroll border-r border-gray-200 h-screen w-1/4 ">
           <MenuListContainer/> 
           <MenuListContainer/>
           <MenuListContainer/>
           </aside>
            <div className="w-full md:w-3/4 "></div>
           </div>
               
               <FloatMenuBtn/>
                
        </>
    );
};

export default OrderOnline;

