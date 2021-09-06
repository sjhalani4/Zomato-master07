import React from 'react'
import NutritionCard from './NutritionCard'
import NutritionCarousal from './NutritionCarousal'
import NutritionHeroCarousal from './NutritionHeroCarousal'


const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal/>
            <div className="">
            <NutritionCarousal/>
            <div className="flex justify-between flex-wrap">
            <NutritionCard image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                 bg="red"/>
                  <NutritionCard image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                 bg="red"/>

                <NutritionCard image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                                bg="red"/>

                <NutritionCard image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                                bg="red"/>

                <NutritionCard image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                                bg="red"/>

                <NutritionCard image="https://dote.zmtcdn.com/prod/data/admin_assets/images/34e/384e52f7a60c840377ede182dcd3d34e_1614427090.png?output-format=webp"
                                bg="red"/>


            </div>
            </div>
            
        </div>
    )
}

export default Nutrition;
