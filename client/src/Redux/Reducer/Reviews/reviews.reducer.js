import { POST_REVIEW,GET_REVIEW } from "./reviews.type"



const INTITIAL_STATE= {
    reviews: [],
}
const restaurantReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case GET_REVIEW:
            return{
                ...state,
                reviews: action.payload  /* payload is nothing but a data that action returns from the server */
            };
            case POST_REVIEW:
            return{
                ...state,
                reviews: [...state.reviews, action.payload],
                //reviews: state.reviews.push(action.payload)  /* payload is nothing but a data that action returns from the server */
            };
            default:
                return{
                    ...state
                };
                
    }
} ;
export default restaurantReducer;
