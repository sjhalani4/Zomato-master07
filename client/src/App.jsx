//Redirect
import {Route, Redirect} from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from './HOC/Restaurant.HOC';
import CheckoutLayoutHOC from "./HOC/Checkout.Hoc";
//components
// import Temp from "./components/temp";
import Overview from './page/Restaurant/Overview';
import RedirectRestaurant from './page/Restaurant/Redirect';
import React,{useEffect} from 'react';

//page 
import Home from './page/Home'
import OrderOnline from './page/Restaurant/OrderOnline';
import Reviews from './page/Restaurant/Reviews';
import Menu from './page/Restaurant/Menu';
import Photos from './page/Restaurant/Photos';
import axios from 'axios';
import GoogleAuth from './page/GoogleAuth';
import Checkout from './page/Checkout';

//redux action
import { getMyself } from './Redux/Reducer/User/user.action';


// axios global settings
if(localStorage.zomatoUser) { 
  const {token}=JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
}




function App() {
  const dispatch = useDispatch();
useEffect(()=>{
if(localStorage.zomatoUser)
dispatch(getMyself());
  },[]);
  return (<> 
  
  <Route path="/" exact >
    <Redirect to ='/delivery'/>

  </Route>
          <Route path="/restaurant/:id" exact component={RedirectRestaurant}/>
            {/* <Redirect to = '/restaurant/:id/overview'/> because id is here checked as a text 
          </Route> */}
  
  {/* <HomeLayoutHOC path="/" exact component = {Temp}/> */}
  <HomeLayoutHOC path="/:type" exact component = {Home}/>
  <HomeLayoutHOC path="/google/:token" exact component = {GoogleAuth}/>
    <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component = {Overview}/>
    <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component = {OrderOnline}/>
    <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component = {Reviews}/>
    <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component = {Menu}/>
    <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component = {Photos}/>
    <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />






  </>
  );
}
export default App;
