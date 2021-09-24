import { combineReducers } from "redux"; /* It is used to combine multiple Reducer into a single Reducer which can be passed to create store method */
import restaurant from "./restaurant/restaurant.reducer";
import image from "../Image/Image.reducer"

const rootReducer = combineReducers({restaurant,image})


export default rootReducer;