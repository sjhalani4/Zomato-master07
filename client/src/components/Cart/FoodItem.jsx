import React from 'react'



const FoodItem = (props) => {
    const IncrementQnty = ()=>{

    };
    return (
        <>
          <div className="flex items-center justify-between" >
                    <h5>{props.name}</h5>
                    <div className="flex flex-col items-end">
                        <small>₹{parseInt(props.price) * parseInt(props.quantity)}</small>
                        <div className="flex px-1 items-center gap-1  text-white rounded bg-zomato-400">
                            <button className="p-1 bg-zomato-400 text-white rounded">-</button>
                            <small>14</small>
                            <button className="p-1 bg-zomato-400 text-white rounded">+</button>
                        </div>
                    </div>
                </div>
                <hr className="my-1 "/>  
        </>
    );
};

export default FoodItem;
