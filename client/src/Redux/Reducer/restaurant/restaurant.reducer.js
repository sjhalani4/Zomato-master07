import { GET_RESTAURANT,GET_SPECIFIC_RESTAURANT } from "./restaurant.type"



const INTITIAL_STATE= {
    restaurants:[],
    selectedRestaurant:[],
}
const restaurantReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case GET_RESTAURANT:
            return{
                ...state,
               restaurants: action.payload  /* payload is nothing but a data that action returns from the server */
            };
            case GET_SPECIFIC_RESTAURANT:
            return{
                ...state,
                selectedRestaurant: action.payload  /* payload is nothing but a data that action returns from the server */
            };
            default:
                return{
                    ...state
                };
                
    }
} ;
export default restaurantReducer;
