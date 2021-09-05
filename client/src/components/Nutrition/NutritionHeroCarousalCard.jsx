import React from 'react'

const NutritionHeroCarousalCard = (props) => {
    return (
        <div className="w-full h-36 md:h-72">
            <img src= {props.image}
            //"https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png"
             alt="medicine"
             className="w-full h-full"
             />
        </div>
    );
};

export default NutritionHeroCarousalCard;
