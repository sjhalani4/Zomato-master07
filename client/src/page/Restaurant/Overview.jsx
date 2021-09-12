import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../components/CarousalArrow';
import ReactStars from "react-rating-stars-component";

//Map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



//components
import MenuCollection from '../../components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from './MenuSimilarRestaurantCard';
import ReviewCard from './Reviews/ReviewCard';


const Overview = () => {
    const {id}= useParams();
    const settings = {
        breakpoint:1024,
        arrows:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
      };
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
                       <MenuCollection menuTitle="Food Menu" pages="3" image="https://b.zmtcdn.com/data/menus/615/18825615/cefffadc417d61f6eb9752315d5529eb.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"/>
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
                          <div className="my-4 flex flex-col gap-4">
                             <ReviewCard/>
                             <ReviewCard/>
                             <ReviewCard/>
                             </div>
                      </div>
                      

              
                <aside
                style={{height:"fit-content"}}
                className="hidden md:block md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-xl">
                  <div className="my-4">
                  <h4 className="text-xl font-medium  ">Call</h4>
                  <h5 className="text-zomato-400 font-medium">+918770233852</h5>
                  </div>
                  <div>
                  <h4 className="text-xl font-medium  ">Direction</h4>
                 <div className="w-full h-48">
                 <MapContainer   center={[27.8012, 76.6442]} zoom={13} scrollWheelZoom={false}>
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[27.80, 76.64]}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </MapContainer>

                 </div>
                 
                  
                    
                          

                  </div>
                  </aside>              
              </div>  
        </>
    );
};

export default Overview;
