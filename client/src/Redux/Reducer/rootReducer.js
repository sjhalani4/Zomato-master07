import { combineReducers } from "redux"; /* It is used to combine multiple Reducer into a single Reducer which can be passed to create store method */
import restaurant from "./restaurant/restaurant.reducer";
//import image from "../Image/Image.reducer"
import image from '../Reducer/Image/Image.reducer';
import reviews from "./Reviews/reviews.reducer";
import user from "./User/user.reducer";
import food from "./Food/Food.reducer";
const rootReducer = combineReducers({restaurant,image,reviews,user,food});


export default rootReducer;