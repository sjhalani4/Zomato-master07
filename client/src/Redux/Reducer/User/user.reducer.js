import { GET_USER, AUTH_USER } from "./user.type"



const INTITIAL_STATE= {
    user: {},
};
const UserReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case GET_USER:
            return{
                ...state,
                reviews: action.payload  /* payload is nothing but a data that action returns from the server */
            };
            case AUTH_USER:
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
export default UserReducer;
