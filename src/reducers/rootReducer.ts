import { combineReducers } from "redux";
import scrollSlice from "./scrollSlice";

const rootReducer = combineReducers({
  scroll: scrollSlice,
});

export default rootReducer;
