import axios from "axios";


//Redux Types
import {SIGN_IN,SIGN_UP,GOOGLE_AUTH} from "./Auth.type"

//redux actions
import { getMyself } from "../User/user.action";


export const signIn=(userData)=> async(dispatch)=>{
try {
    const User = await axios({
        method:"POST",
        url:`http://localhost:4000/auth/signin`,
        data:{credentials:userData },
    
    
    });
    getMyself();
    localStorage.setItem("zomatoUser",
    JSON.stringify({token:User.data.token})
    );
    return dispatch({type:SIGN_IN,payload:User.data});
    
} catch (error) {
    return dispatch({type:"ERROR",payload:error});
    
}

};
export const googleAuth=(token)=> async(dispatch)=>{
    try {
        const User = await axios({
                        method:"POST",
                        url:`http://localhost:4000/auth/google`,                         /* POST error solved */
                        data:{credentials:token },
                    
                    
                    });
       
        localStorage.setItem("zomatoUser",
       JSON.stringify({token:User.data.token})
        );

        getMyself();
        return dispatch({type:GOOGLE_AUTH,payload:{}});
        
    } catch (error) {
        return dispatch({type:"ERROR",payload:error});
        
    }
    
    };
export const signUp=(userData)=> async(dispatch)=>{
    try {
        const User = await axios({
            method:"POST",
            url:`http://localhost:4000/auth/signup`,
            data:{credentials:userData },
        
        
        });
        getMyself();
        localStorage.setItem("zomatoUser",
        JSON.stringify({token:User.data.token})
        );
        return dispatch({type:SIGN_UP,payload:User.data});
        
    } catch (error) {
        return dispatch({type:"ERROR",payload:error});
        
    }
    
    };

    // export const googleAuth=(userData)=> async(dispatch)=>{
    //     try {
    //         const User = await axios({
    //             method:"POST",
    //             url:`http://localhost:4000/auth/google`,
    //             data:{credentials:userData },
            
            
    //         });
    //         localStorage.setItem("zomatoUser",
    //         JSON.stringify({token:User.data.token})
    //         );
    //         return dispatch({type:GOOGLE_AUTH,payload:User.data});
            
    //     } catch (error) {
    //         return dispatch({type:"ERROR",payload:error});
            
    //     }
        
    //     };