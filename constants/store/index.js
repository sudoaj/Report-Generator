import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers,} from 'redux';

import test from './test/reducer'


const navReducer = (state = {}) => state;
const appReducer = combineReducers({
  nav: navReducer,
  test,
});

export default createStore(appReducer, applyMiddleware(thunk));