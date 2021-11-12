export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export const setAuthedUser = (authedUser) => ({
    type: SET_AUTHED_USER,
    authedUser
})

export const logoutAuthedUser = () => ({
    type: SET_AUTHED_USER,
    authedUser: null
})

