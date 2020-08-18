import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import officer from "./officer/reducer";
import timeslot from "./timeslot/reducer";
import auth from "./auth/reducer";
import report from "./report/reducer"

const navReducer = (state = {}) => state;
const appReducer = combineReducers({
  nav: navReducer,
  auth,
  report,
  officer,
  timeslot,
});

export default createStore(appReducer, applyMiddleware(thunk));
