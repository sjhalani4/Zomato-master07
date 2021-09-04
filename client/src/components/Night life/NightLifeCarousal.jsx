import React from 'react'

//components
import PictureCarousalCard from '../PictureCarousal';

//Slider
import Slider from 'react-slick';
import { NextArrow,PrevArrow } from '../CarousalArrow';




const NightLifeCarousal = () => {

    const settings = {
        arrows:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
    }

    return (
        <div className="w-full">
        <Slider {...settings}>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        </Slider>
            
        </div>
    )
}

export default NightLifeCarousal;
