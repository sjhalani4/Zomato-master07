import { GET_RESTAURANT } from "./restaurant.type"



const INTITIAL_STATE= {
    restaurants:[],
}
const restaurantReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case GET_RESTAURANT:
            return{
                ...state,
               restaurants: action.payload  /* payload is nothing but a data that action returns from the server */
            };
            default:
                return{
                    ...state
                };
                
    }
} ;
export default restaurantReducer;
