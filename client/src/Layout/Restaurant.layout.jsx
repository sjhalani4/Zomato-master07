import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'; 
import {useDispatch} from 'react-redux';
import { BiBookmarkPlus } from 'react-icons/bi';
import { RiDirectionLine,RiShareForwardLine } from 'react-icons/ri';
import { TiStarOutline } from 'react-icons/ti';
import CartContainer from '../components/Cart/CartContainer';






//components
import RestaurantNavbar from '../components/Navbar/RestaurantNavbar';
import ImageGrid from '../components/restaurant/ImageGrid';
import InfoButtons from '../components/restaurant/InfoButtons';
import RestaurantInfo from '../components/restaurant/RestaurantInfo';
import TabContainer from '../components/restaurant/Tabs';


//redux action
import { getSpecificRestaurant } from '../Redux/Reducer/restaurant/restaurant.action';
import { getImage } from '../Redux/Reducer/Image/Image.action';




const RestaurantLayout = (props) => {
    const [restaurant, setRestaurant] = useState({
        images:[],
        name:"",
        cuisine:"",
        address:""
    });
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data)=>{ 
            setRestaurant((prev)=>
            ({...prev,
                ...data.payload.restaurant,
            }));
            dispatch(getImage(data.payload.restaurant.photos)).then(data => setRestaurant((prev)=>({...prev,...data.payload.image })))
        });
        
    }, []);
    return (
        <>
         <RestaurantNavbar/>
         <div className="container   mx-auto px-4 lg:px-20"> 
         <ImageGrid 
         images={restaurant.images}
         />
            <RestaurantInfo name={restaurant?.name}
             restaurantRating={restaurant?.rating || 0}
             deliveryRating = {restaurant?.rating ||0}
             cuisine={restaurant?.cuisine}
             address={restaurant?.address}
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
        <CartContainer/>
        </>
    );
};

export default RestaurantLayout;