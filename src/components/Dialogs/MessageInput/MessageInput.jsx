import s from '../Dialogs.module.css';

const MessageInput = (props) => {
    const writeNewMessageText = (e) => {
        let text = e.target.value;
        props.writeNewMessageText(text);
    }

    const sendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={s.messageInput}>
            <textarea value={props.messageText} onChange={writeNewMessageText}></textarea>
            <button onClick={sendMessage}>send</button>
        </div>
    )
}

export default MessageInput;