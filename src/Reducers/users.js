import { RECEIVE_USERS, SAVE_ANSWERS_TO_USERS } from "../Actions/users";
import { SAVE_QUESTION_TO_USERS } from "../Actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWERS_TO_USERS:
      const { authuser, qid, answer } = action;

      return {
        ...state,
        [authuser]: {
          ...state[authuser],
          answers: {
            ...state[authuser].answers,
            [qid]: answer,
          },
        },
      };

    case SAVE_QUESTION_TO_USERS:
      const { id, author } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          question: state[author].questions.concat([id]),
        },
      };

    default:
      break;
  }
}