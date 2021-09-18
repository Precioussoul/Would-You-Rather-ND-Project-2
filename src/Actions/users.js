import { _saveQuestionAnswer } from "../Utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_ANSWERS_TO_USERS = "SAVE ANSWER TO USERS";
export const SAVE_ANSWER_TO_QUESTIONS = "SAVE ANSWER TO QUESTIONS";

// users : from our database => saveQuestionAnswers() ...utli/data

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveAnswerToUsers(authUser, qid, answer) {
  return {
    type: SAVE_ANSWERS_TO_USERS,
    authUser,
    qid,
    answer,
  };
}

export function saveAnswerToQuestions(authUser, qid, answer) {
  return {
    type: SAVE_ANSWER_TO_QUESTIONS,
    authUser,
    qid,
    answer,
  };
}

export function handdleSaveQuestionAnswer(authUser, qid, answer) {
  return (dispatch) => {
    dispatch(saveAnswerToUsers(authUser, qid, answer));
    dispatch(saveAnswerToQuestions(authUser, qid, answer));

    return _saveQuestionAnswer(authUser, qid, answer).catch((message) => {
      console.log("cant process data at saveQuestionanswer()", message);
    });
  };
}
