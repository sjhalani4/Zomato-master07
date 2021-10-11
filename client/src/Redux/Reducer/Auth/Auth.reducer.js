import { SIGN_IN,SIGN_UP } from "./Auth.type"



const INTITIAL_STATE= {
    user:{},
}
const AuthReducer = (state=INTITIAL_STATE, action)=>{
    switch (action.type){
        case SIGN_IN:
            return{
                ...state,
            };
            case SIGN_UP:
            return{
                ...state,
            };
            default:
                return{
                    ...state
                };
                
    }
} ;
export default AuthReducer;
