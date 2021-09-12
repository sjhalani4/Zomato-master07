import React from 'react'
import { BiBookmarkPlus } from 'react-icons/bi';
import { RiDirectionLine,RiShareForwardLine } from 'react-icons/ri';
import { TiStarOutline } from 'react-icons/ti';






//components
import RestaurantNavbar from '../components/Navbar/RestaurantNavbar';
import ImageGrid from '../components/restaurant/ImageGrid';
import InfoButtons from '../components/restaurant/InfoButtons';
import RestaurantInfo from '../components/restaurant/RestaurantInfo';
import TabContainer from '../components/restaurant/Tabs';




const RestaurantLayout = (props) => {
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
            <RestaurantInfo name="Popular Fresh Momos 'N' More"
             restaurantRating="3.7"
             deliveryRating = "3.8"
             cuisine="Chinese, Fast Food, Momos, Burger, Beverages"
             address="Civil Lines, Jabalpur"
             />
             <div className="my-4 flex flex-wrap gap-3">
                 <InfoButtons isActive>
                 <TiStarOutline/> Add Reviews
                 </InfoButtons>
                 <InfoButtons>
                 <RiDirectionLine/> Direction
                 </InfoButtons>
                 <InfoButtons>
                 <BiBookmarkPlus/> Bookmark
                 </InfoButtons>
                 <InfoButtons>
                 <RiShareForwardLine/> Share
                 </InfoButtons>
             </div>
             <div className="my-10">
                 <TabContainer/>
                 </div>
                 {props.children}
        </div>
        </>
    );
};

export default RestaurantLayout;
