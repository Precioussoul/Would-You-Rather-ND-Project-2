import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitialData } from "../Utils/Api";
import { receiveQuestion } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      return (
        dispatch(receiveQuestion(questions)),
        dispatch(receiveUsers(users)),
        dispatch(hideLoading())
      );
    });
  };
}
