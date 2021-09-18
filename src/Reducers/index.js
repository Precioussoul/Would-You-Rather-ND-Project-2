import authUser from "./authUser";
import questions from "./questions";
import users from "./users";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  authUser,
  questions,
  users,
});

export default appReducer;
