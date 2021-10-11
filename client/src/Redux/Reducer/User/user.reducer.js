import { GET_USER,SELF } from "./user.type"



const INTITIAL_STATE= {
    user: {},
};
const UserReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case GET_USER:
            return{
                ...state,
            };
            
            case SELF:
            return{
                ...state,
                user: action.payload,
                
            };
            default:
                return{
                    ...state
                };
                
    }
} ;
export default UserReducer;
