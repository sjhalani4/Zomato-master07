import { GET_FOOD_LIST } from "./Food.type"



const INTITIAL_STATE= {
    FoodList:[],
}
const FoodReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case GET_FOOD_LIST:
            return{
                ...state,
                FoodList: action.payload  /* payload is nothing but a data that action returns from the server */
            };
            default:
                return{
                    ...state
                };
                
    }
} ;
export default FoodReducer;
