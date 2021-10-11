import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams,useHistory } from 'react-router';


//redux actions
import { googleAuth } from '../Redux/Reducer/Auth/Auth.action';


const GoogleAuth = () => {
    const { token } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=> {
      if(token){
          dispatch(googleAuth(token)).then(()=> history.push("/delivery"));
      }
    },[token]);
    return (
        <>Loading , please wait.</>
    );
};

export default GoogleAuth;
