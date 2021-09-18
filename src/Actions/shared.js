import { getInitialData } from "../Utils/Api";
import { receiveQuestion } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestion(questions)), dispatch(receiveUsers(users));
    });
  };
}
