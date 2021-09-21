import React,{useState} from 'react'
import { IoMdArrowDropdown,IoMdArrowDropup,IoMdArrowDropright } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
//components
import FoodItem from './FoodItem';




const CartSM = ({toggle}) => {
return (<>
    <div className="md:hidden flex items-center justify-between">
    
               <div className="flex flex-col  items-start">
                   <small className="flex items-center gap-1" onClick={toggle}>
                       1 Item <IoMdArrowDropup/>
                   </small>
               
               <h4>
                    ₹300 <sub>(plus tax)</sub>
               </h4>
               </div>
               <button className="flex items-center gap-1 px-3 py-1 rounded-lg text-white bg-zomato-400">
                   Continue <IoMdArrowDropright/>
               </button>
            </div> 
    

</>
);
};
const CartLG = ({toggle}) => {
    return (<>
        <div className="hidden md:flex items-center justify-between container px-20 mx-auto">
        
                   <div className="flex gap-2 text-xl items-start">
                       <span className="border border-gray-300 p-1 rounded" onClick={toggle}>
                            <IoMdArrowDropup/>
                       </span>
                   
                   <h4>
                        Your Orders (1) <sub>(plus tax)</sub>
                   </h4>
                   </div>
                  <div className="flex gap-2 items-center">
                  <h4 className="text-xl ">
                       Subtotal: ₹300
                   </h4>
                  <button className="flex items-center text-lg font-light h-10 gap-1 px-3 py-1 rounded-lg text-white bg-zomato-400">
                       Continue <IoMdArrowDropright/>
                   </button>
                  </div>
                </div> 
        
    
    </>
    );
    };
const CartContainer = () => {
    const [isOpen, setIsOpen]=useState(false)
    const toggleCart = ()=> setIsOpen((prev)=>!prev)
    const closeCart = ()=> setIsOpen(false)
    return (
        <>
        {
            isOpen&&(
                <div className="fixed w-full  h-48  overflow-y-scroll bg-white p-2 z-10 px-3 bottom-16   ">
            <div className="flex items-center justify-between gap-1">
            <h3 className="text-xl font-semibold">Your Orders</h3> 
            <IoCloseSharp onClick={closeCart}/>
            </div>
            <hr className="my-2" />
            <div className="flex flex-col gap-2">
            <FoodItem name="Pizza" quantity="4" price="90"/>
            <FoodItem name="Pizza" quantity="4" price="90"/>
            <FoodItem name="Pizza" quantity="4" price="90"/>
            <FoodItem name="Pizza" quantity="4" price="90"/>
            <FoodItem name="Pizza" quantity="4" price="90"/>
                
            </div>
        </div>
            )
        };
        <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0">
        <CartSM toggle={toggleCart}/>
        <CartLG toggle={toggleCart}/>

        </div>
           
        </>
    );
};

export default CartContainer;
