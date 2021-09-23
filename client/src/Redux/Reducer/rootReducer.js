import { combineReducers } from "redux"; /* It is used to combine multiple Reducer into a single Reducer which can be passed to create store method */
import restaurant from "./restaurant/restaurant.reducer";

const rootReducer = combineReducers({restaurant})

export default rootReducer;