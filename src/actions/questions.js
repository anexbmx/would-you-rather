import { _getQuestions } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const LIST_OF_QUESTIONS = 'LIST_OF_QUESTIONS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export const recieveQuestions = (questions) => ({
    type: LIST_OF_QUESTIONS,
    questions
})

export const handleReceiveQuestions = () => (dispatch) => {
    dispatch(showLoading())
    _getQuestions().then((questions) => {
        dispatch(recieveQuestions(questions));
        dispatch(hideLoading())
    }).catch((e) => {
        console.log("Error in handleReceiveQuestions", e);
        dispatch(hideLoading())
    })
}

export const addNewQuestion = (question) => ({
    type: ADD_NEW_QUESTION,
    question
})

export const answerQuestion = ({qid, authedUser, answer}) => ({
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
})