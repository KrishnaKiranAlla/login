import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createHashHistory } from "history";
import userReducer from "./userReducer";

const history = createHashHistory();

export default combineReducers({
  user: userReducer,
  router: connectRouter(history),
});
