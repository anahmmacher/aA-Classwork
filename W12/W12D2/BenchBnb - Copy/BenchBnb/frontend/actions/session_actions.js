import { signUp, logIn, logOut } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});


const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS
});

export const createNewUser = formUser => dispatch => {
    return signUp(formUser)
        .then(user => dispatch(receiveCurrentUser(user)));
};

export const login = formUser => dispatch => {
    return logIn(formUser)
        .then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
    return logOut()
        .then(() => dispatch(logoutCurrentUser()));
};

