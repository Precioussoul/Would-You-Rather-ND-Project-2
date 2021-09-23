import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
const appReducer = combineReducers({
  authedUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
});

export default appReducer;
