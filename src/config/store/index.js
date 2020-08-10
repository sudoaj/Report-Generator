import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import officer from "./officer/reducer";
import timeslot from "./timeslot/reducer";
import auth from "./auth/reducer";

const navReducer = (state = {}) => state;
const appReducer = combineReducers({
  nav: navReducer,
  auth,
  officer,
  timeslot,
});

export default createStore(appReducer, applyMiddleware(thunk));
