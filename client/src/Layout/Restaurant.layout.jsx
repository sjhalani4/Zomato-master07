import React from 'react'

//components
import RestaurantNavbar from '../components/Navbar/RestaurantNavbar';
import ImageGrid from '../components/restaurant/ImageGrid';



const RestaurantLayout = () => {
    return (
        <>
         <RestaurantNavbar/>
         <div className="container   mx-auto px-4 lg:px-20"> 
         <ImageGrid images={[
            "https://b.zmtcdn.com/data/pictures/2/18825622/604972116cb970d5cebc2360076e610b.jpg",
            "https://b.zmtcdn.com/data/pictures/2/18825622/604972116cb970d5cebc2360076e610b.jpg",
            "https://b.zmtcdn.com/data/pictures/2/18825622/604972116cb970d5cebc2360076e610b.jpg" ,
            "https://b.zmtcdn.com/data/pictures/2/18825622/604972116cb970d5cebc2360076e610b.jpg",
            "https://b.zmtcdn.com/data/pictures/2/18825622/604972116cb970d5cebc2360076e610b.jpg"
         ]}/>
           
        </div>
        </>
    );
};

export default RestaurantLayout;
