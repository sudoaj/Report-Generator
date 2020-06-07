import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import officer from "./officer/reducer";
import timeslot from "./timeslot/reducer"

const navReducer = (state = {}) => state;
const appReducer = combineReducers({
	nav: navReducer,
	officer,
	timeslot,
});

export default createStore(appReducer, applyMiddleware(thunk));
