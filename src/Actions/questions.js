import { _saveQuestion } from "../Utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_TO_USERS = "SAVE QUESTION TO USERS";

// questions : from our database => saveQuestionAnswers() ...utli/data

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function receiveQuestion(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionsToUsers({ id, author }) {
  return {
    type: SAVE_QUESTION_TO_USERS,
    id,
    author,
  };
}

// question = {
//   text1,
//   text2,
//   author,
// };

// export function handleAddQuestion(question) {
//   return (dispatch) => {
//     return _saveQuestion(question).then((question) => {
//       dispatch(addQuestion(question)), dispatch(saveQuestionsToUsers(question));
//     });
//   };
// }

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        return (
          dispatch(addQuestion(question)),
          dispatch(saveQuestionsToUsers(question.id, question.author))
        );
      }
    );
  };
}
