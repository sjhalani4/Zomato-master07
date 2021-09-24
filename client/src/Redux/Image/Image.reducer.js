import { GET_IMAGE } from "./Image.type"



const INTITIAL_STATE= {
    Image:[],
}
const imageReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case GET_IMAGE:
            return{
                ...state,
                Image: action.payload  /* payload is nothing but a data that action returns from the server */
            };
            default:
                return{
                    ...state
                };
                
    }
} ;
export default imageReducer;
