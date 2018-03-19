import { Alert } from 'react-native'

import { Login, Logout } from "../actions";

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CLOSE_MESSAGE
} from "../constants";

const initialState = {
    email: '',
    password: '',
    message: 'Reactive!',
    error: false,
    isLoggedIn: false,
    token: false,
};

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, email: action.email };

        case CHANGE_PASSWORD:
            return { ...state, password: action.password };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.response.token
            };

        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error.message
            };

        case CLOSE_MESSAGE:
            return {
                ...state,
                error: false
            };

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                email: '',
                password: ''
            };

        default:
            return state;
    }
};

export default loginReducer;
