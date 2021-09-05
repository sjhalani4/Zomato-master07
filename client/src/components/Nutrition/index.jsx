import React from 'react'
import NutritionCarousal from './NutritionCarousal'
import NutritionHeroCarousal from './NutritionHeroCarousal'


const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal/>
            <div className="">
            <NutritionCarousal/>
            </div>
            
        </div>
    )
}

export default Nutrition;
