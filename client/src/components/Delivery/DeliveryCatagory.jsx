import React from 'react'


const DeliverySmCard = ({image, title}) => {
    return (
        <>
        <div className="lg:hidden bg-white w-24 shadow rounded-md md:w-56">
            <div className="w-full h-24 ">
            <img src= {image}                alt="food"
                 className="w-full h-full rounded-t-md object-cover"
                 />
            </div>
            <div>
                <h3 className="text-sm my-1 text-center  font-light">{title}</h3>
            </div>

        </div>
            
        </>
    );
};

const DeliveryLgCard = ({image, title}) => {
return (
    <>
        <div className="hidden lg:block w-64 h-48 ">
            <div className="w-full h-full ">
            <img src={image}                alt="food"
                 className="w-full h-full rounded-md object-cover shadow-lg"
                 />
            </div> 
            <div>
                <h3 className="text-xl my-1  font-medium">{title}</h3>
            </div>

        </div>
            
        </>

 
);



};



const DeliveryCatagory = (props) => {
    return (
        <>
        
            <div>
                <DeliverySmCard {...props} />
                <DeliveryLgCard {...props}/>
            </div>
        </>
    );
};

export default DeliveryCatagory;
