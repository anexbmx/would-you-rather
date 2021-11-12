import { LIST_OF_USERS, SET_NEW_QUESTION, SET_NEW_ANSWER } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case LIST_OF_USERS:
            return { ...action.users }

        case SET_NEW_QUESTION:
            const { author, id } = action;
            const user = state[author];

            return {
                ...state,
                [user.id]: {
                    ...user,
                    questions: user.questions.concat([id])
                }
            }

        case SET_NEW_ANSWER:
            const { authedUser, answer } = action;
            
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [action.qid]: answer
                    }
                }
            }
        default:
            return state;
    }
}