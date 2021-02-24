const ADD_POST = 'ADD-POST';
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: "Hello, I learning React.js", likesCount: 13},
        {id: 2, message: "currenly i'm continue learning React", likesCount: 26},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }

            if (state.newPostText !== '') {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                }
            }
        }
        default:
            return state;
    }
}

export const newPostTextActionCreator = (text) => (
    {type: SET_NEW_POST_TEXT, newText: text}
);
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;