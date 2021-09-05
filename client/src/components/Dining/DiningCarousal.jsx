import React from 'react'

//components
import PictureCarousalCard from '../PictureCarousal';

//Slider
import Slider from 'react-slick';
import { NextArrow,PrevArrow } from '../CarousalArrow';




const DiningCarousal = () => {

    const settings = {
        arrows:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

export default DiningCarousal;
