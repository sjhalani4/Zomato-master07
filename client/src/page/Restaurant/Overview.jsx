import React,{useState,useEffect} from 'react'
import { IoMdArrowDropright } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";
import {useSelector,useDispatch} from "react-redux";
//components
import MenuCollection from '../../components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../components/CarousalArrow';
import ReviewCard from '../../components/restaurant/Reviews/ReviewCard';
import Mapview from '../../components/restaurant/Reviews/Mapview';

import { getImage } from '../../Redux/Reducer/Image/Image.action';



const Overview = () => {
  const [menuImages,setMenuImages] = useState({ images:[] })
    const {id}= useParams();
    const settings = {
      arrows:true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow/>,
      prevArrow:<PrevArrow/>,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  };
  const reduxState = useSelector(
    (globalStore)=> globalStore.restaurant.selectedRestaurant.restaurant
  );
     const dispatch = useDispatch();  
  useEffect(() => {
     if(reduxState){
      dispatch(getImage(reduxState?.menuImage)).then((data)=>{
      const images = [];
        data.payload.image.images.map(({location} )=>images.push(location));
        setMenuImages(images);
      });
     }
      }, []);

      const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        
        <>
          <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-8/12  ">
                  <h2 className="text-lg md:text-xl font-semibold my-4">About this place</h2>
                  <div className="flex justify-between items-center">
                      <h4 className="text-lg font-medium ">Menu</h4>
                      <Link to= {`/restaurant/${id}/menu`}>
                      <span className="flex items-center gap-1 text-zomato-400">See all menu <IoMdArrowDropright/> </span>
                      </Link>

                  </div>
                      <div className="flex flex-wrap gap-3">
                       <MenuCollection menuTitle="Food Menu" pages="3" image=
                       {menuImage}/>
                      </div>
                      <h4 className="text-lg font-medium my-4 ">Cuisines</h4>
                      <div className="flex flex-wrap gap-2">
                      <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">Street Food</span>
                      <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">Street Food</span>
                      <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full ">Street Food</span>

                      </div>
                      <div className="my-4">
                      <h4 className="text-lg font-medium  ">Average Cost</h4>
                      <h6>₹400 for two people (approx.)</h6>
                      <small className="text-gray-600"> Exclusive of applicable taxes and charges, if any </small>
                      </div>
                        <div>
                        <h4 className="text-lg font-medium  ">Similar Restaurants</h4>
                        <Slider {...settings}>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/9/18816849/b1e49441e2b259686ebb1414592bb2be_featured_v2.jpg" title="Burger N Sons"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/9/18816849/b1e49441e2b259686ebb1414592bb2be_featured_v2.jpg" title="Burger N Sons"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/9/18816849/b1e49441e2b259686ebb1414592bb2be_featured_v2.jpg" title="Burger N Sons"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/9/18816849/b1e49441e2b259686ebb1414592bb2be_featured_v2.jpg" title="Burger N Sons"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/9/18816849/b1e49441e2b259686ebb1414592bb2be_featured_v2.jpg" title="Burger N Sons"/>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/9/18816849/b1e49441e2b259686ebb1414592bb2be_featured_v2.jpg" title="Burger N Sons"/>                       
                         </Slider>
                        </div>
                        <div className="my-4">
                         <h4 className="text-lg font-medium  ">Rate your delivery address</h4>
                         <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                        />
                          </div>
                          <div className="my-4 md:hidden flex flex-col gap-4 w-full"> 
                          <Mapview phno="+918770233852" title="Sahil Jhalani 5 star Hotel" mapLocation={[27.8012, 76.6442]} address="Jhalani mohalla ward no. 5, Khairthal"/>

                           </div>
                          <div className="my-4 flex flex-col gap-4">
                             <ReviewCard/>
                             <ReviewCard/>
                             <ReviewCard/>
                             </div>
                      </div>
                      

              
                <aside
                style={{height:"fit-content"}}
                className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-xl flex-col gap-4">
                  
                 <Mapview phno="+918770233852" title="Sahil Jhalani 5 star Hotel" mapLocation={[27.8012, 76.6442]} address="Jhalani mohalla ward no. 5, Khairthal"/>
                 </aside> 
                          

                  
                  
                               
              </div>  
        </>
    );
};

export default Overview;
