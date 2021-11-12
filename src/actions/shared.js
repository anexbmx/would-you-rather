import { addNewQuestion, answerQuestion } from "./questions";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { setNewQuestion, setNewAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";


export const handleNewQuestion = (info) => (dispatch) => {
    dispatch(showLoading())
    _saveQuestion(info)
        .then((question) => {
            dispatch(addNewQuestion(question));
            dispatch(setNewQuestion(question));
            dispatch(hideLoading())
        }).catch((e) => {
            console.log("Error in handleNewQuestion", e);
            dispatch(hideLoading())
        })
}


export const handerAnswerQuestion = (info) => (dispatch) => {
    dispatch(showLoading())

    console.log(info)
    _saveQuestionAnswer(info)
        .then(() => {
            dispatch(answerQuestion(info));
            dispatch(setNewAnswer(info));
            dispatch(hideLoading())
        })
        .catch((e) => {
            console.log("Error in handerAnswerQuestion", e)
            dispatch(hideLoading());
        })
}
