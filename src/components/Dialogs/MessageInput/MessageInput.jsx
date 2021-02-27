import React from 'react';
import s from '../Dialogs.module.css';

class MessageInput extends React.Component {

    writeNewMessageText = (e) => {
        let text = e.target.value;
        this.props.writeNewMessageText(text);
    }

    sendMessage = () => {
        this.props.sendMessage();
    }

    render() {
        return (
            <div className={s.messageInput}>
                <textarea value={this.props.messageText} onChange={this.writeNewMessageText}></textarea>
                <button onClick={this.sendMessage}>send</button>
            </div>
        )
    }
}

export default MessageInput;