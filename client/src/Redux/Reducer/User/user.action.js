import axios from "axios";

//Redux Types
import {GET_USER,AUTH_USER} from "./user.type"



export const getUser=()=> async(dispatch)=>{
try {
    const User = await axios({
        method:"GET",
        url:`http://localhost:4000/user/`,
    
    
    });
    return dispatch({payload:User.data});
    
} catch (error) {
    return dispatch({type:"ERROR",payload:error});
    
}
};
export const getMyself=()=> async(dispatch)=>{
    try {
        const User = await axios({
            method:"GET",
            url:`http://localhost:4000/user/`,
        
        
        });
        return dispatch({type:GET_USER,payload:User.data});
        
    } catch (error) {
        return dispatch({type:"ERROR",payload:error});
        
    }
    };
