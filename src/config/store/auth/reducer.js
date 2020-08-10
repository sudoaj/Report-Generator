import {
  AUTHENTICATED,
  LOGIN,
  STORE_USER,
  STORE_TOKEN,
  STORE_PROFILE,
  LOGOUT,
} from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: action.data,
      };
    case LOGIN:
      return {
        ...state,
        login: action.data,
      };
    case STORE_USER:
      return {
        ...state,
        user: action.data,
      };
    case STORE_PROFILE:
      return {
        ...state,
        userprofile: action.data,
      };
    case STORE_TOKEN:
      return {
        ...state,
        token: action.data,
      };
    case LOGOUT:
      return {
        ...state,
        logout: action.data,
      };
    default:
      return state;
  }
};
