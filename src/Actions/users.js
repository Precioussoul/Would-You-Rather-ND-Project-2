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

export function saveAnswerToUsers(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWERS_TO_USERS,
    authedUser,
    qid,
    answer,
  };
}

export function saveAnswerToQuestions(authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER_TO_QUESTIONS,
    authedUser,
    qid,
    answer,
  };
}

export function handdleSaveQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(saveAnswerToUsers({ authedUser, qid, answer }));
    dispatch(saveAnswerToQuestions({ authedUser, qid, answer }));
    return _saveQuestionAnswer({ authedUser, qid, answer }).catch((err) => {
      console.log(err);
    });
  };
}
