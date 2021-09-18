import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../Actions/questions";
import { SAVE_ANSWER_TO_QUESTIONS } from "../Actions/users";
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case SAVE_ANSWER_TO_QUESTIONS:
      const { authUser, qid, answer } = action;
      return {
        ...state,
        [qid]: state[qid],
        [answer]: {
          ...state[qid][answer],
          votes: state[qid][answer].votes.concat([authUser]),
        },
      };

    default:
      return state;
  }
}
