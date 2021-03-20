import samuraiAPI from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: "Hello, I learning React.js", likesCount: 13},
        {id: 2, message: "currenly i'm continue learning React", likesCount: 26},
    ],
    userProfile: null,
    profileStatus: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }

            if (action.newPostText !== '') {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost]
                }
            }
        }
        case SET_USER_PROFILE:
            return { ...state, userProfile: action.data }
        case SET_STATUS:
            return { ...state, profileStatus: action.status }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (data) => ({ type: SET_USER_PROFILE, data });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => (dispatch) => {
    samuraiAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
}

export const getStatus = (userId) => (dispatch) => {
    samuraiAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    samuraiAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;