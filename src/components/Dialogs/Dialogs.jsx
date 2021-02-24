import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageInput from "./MessageInput/MessageInput";

const Dialogs = (props) => {

    const dialogs = props
        .dialogsPage
        .dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    const messages = props
        .dialogsPage
        .messagesData
        .map(message => <MessageItem msg={message.msg} />);

    const messageInput = <MessageInput
        sendMessage={props.sendMessage}
        writeNewMessageText={props.writeNewMessageText}
        messageText={props.dialogsPage.messageText}
    />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div>
                <div className={s.messages}>
                    {messages}
                </div>
                {messageInput}
            </div>
        </div>
    )
}

export default Dialogs;