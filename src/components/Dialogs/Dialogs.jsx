import React from 'react';
import s from './Dialogs.module.css';
import MessageInput from "./MessageInput/MessageInput";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogs}
            </div>
            <div>
                <div className={s.messages}>
                    {props.messages}
                </div>
                <MessageInput
                    sendMessage={props.sendMessage}
                    writeNewMessageText={props.writeNewMessageText}
                    messageText={props.messageText}
                />
            </div>
        </div>
    )
}

export default Dialogs;