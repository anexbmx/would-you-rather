import { _getUsers } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const LIST_OF_USERS = 'LIST_OF_USERS';
export const SET_NEW_QUESTION = 'SET_NEW_QUESTION';
export const SET_NEW_ANSWER = 'SET_NEW_ANSWER';

export const recieveUsers = (users) => ({
    type: LIST_OF_USERS,
    users
})

export const handleReceiveUsers = () => (dispatch) => {
    dispatch(showLoading())
    _getUsers().then((users) => {
        dispatch(recieveUsers(users));
        dispatch(hideLoading())
    }).catch((e) => {
        console.log("Error in handleReceiveUsers", e);
        dispatch(hideLoading())
    })
}

export const setNewQuestion = ({id, author}) => ({
    type: SET_NEW_QUESTION,
    id,
    author
})

export const setNewAnswer = ({qid, authedUser, answer}) => ({
    type: SET_NEW_ANSWER,
    qid,
    authedUser,
    answer
})