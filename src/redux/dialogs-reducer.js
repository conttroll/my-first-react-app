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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
                return {
                    ...state,
                    messagesData: [...state.messagesData, { id: 3, msg: body }],
                }
        }
        default:
            return state;
    }
}

export const sendMessageAC = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;