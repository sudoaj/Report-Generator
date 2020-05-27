import { SAVE_AS_DEFAULT } from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_AS_DEFAULT:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
