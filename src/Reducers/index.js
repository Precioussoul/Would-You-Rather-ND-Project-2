import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  authedUser,
  questions,
  users,
});

export default appReducer;
