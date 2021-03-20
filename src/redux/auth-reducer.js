import samuraiAPI from "../api/api";
import { FORM_ERROR } from "final-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setUserDataSucces = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: { userId, email, login, isAuth }});

export const setUserData = () => (dispatch) => {
    samuraiAPI.getLogin()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setUserDataSucces(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await samuraiAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(setUserData());
            } else {
                let error_message = data.messages.length > 0 ? data.messages[0] : 'some error';
                return {[FORM_ERROR]: error_message};
            }
}

export const logout = () => (dispatch) => {
    samuraiAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataSucces(null, null, null, false));
            }
        })
}

export default authReducer;