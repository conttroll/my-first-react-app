const WRITE_NEW_MESSAGE_TEXT = 'WRITE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Igor"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Anton"},
    ],
    messagesData: [
        {id: 1, msg: "Hello"},
        {id: 2, msg: "How are you"},
    ],
    messageText: 'message',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WRITE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                messageText: action.newMessage
            }
        }
        case SEND_MESSAGE: {
            let message = {
                id: 3,
                msg: state.messageText
            }
            if (state.messageText !== '') {
                return {
                    ...state,
                    messagesData: [...state.messagesData, message],
                    messageText: ''
                }
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const writeNewMessageTextActionCreator = (text) => (
    {type: WRITE_NEW_MESSAGE_TEXT, newMessage: text}
)

export default dialogsReducer;