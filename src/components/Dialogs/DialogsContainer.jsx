import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageInput from "./MessageInput/MessageInput";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, writeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//     return (
//             <StoreContext.Consumer>
//             { store => {
//                 let state = store.getState();
//
//                 const writeNewMessageText = (text) => {
//                     store.dispatch(writeNewMessageTextActionCreator(text));
//                 }
//
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }
//
//                 const dialogs = state
//                     .dialogsPage
//                     .dialogsData
//                     .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
//
//                 const messages = state
//                     .dialogsPage
//                     .messagesData
//                     .map(message => <MessageItem msg={message.msg} />);
//
//                 const messageInput = <MessageInput
//                     sendMessage={sendMessage}
//                     writeNewMessageText={writeNewMessageText}
//                     messageText={state.dialogsPage.messageText}
//                 />;
//
//                 return <Dialogs dialogs={dialogs} messages={messages} messageInput={messageInput} />;
//             } }
//         </StoreContext.Consumer>
//     )
// }

const mapDispatchToProps = (dispatch) => {
    return {
        writeNewMessageText: (text) => dispatch(writeNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(sendMessageActionCreator()),
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;