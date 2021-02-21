import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        mainPage: {
            postsData: [
                {id: 1, message: "Hello, I learning React.js", likesCount: 13},
                {id: 2, message: "currenly i'm continue learning React", likesCount: 26},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Igor"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Anton"},
            ],
            messagesData: [
                {msg: "Hello"},
                {msg: "How are you"},
            ],
            messageText: 'message',
        }
    },
    _updateState() {
        console.log('no subscribers');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._updateState = observer;
    },

    setNewPostText(newText) {
        this._state.mainPage.newPostText = newText;
        this._updateState(this._state);
    },

    dispatch(action) {
        this._state.mainPage = profileReducer(this._state.mainPage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._updateState(this._state);
    }
}

export default store;