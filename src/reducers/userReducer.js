import { LOGIN_USER, USER_DETAILS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { token: action.payload };
    case USER_DETAILS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};
