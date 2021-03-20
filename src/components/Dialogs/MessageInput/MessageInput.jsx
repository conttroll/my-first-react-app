import React from 'react';
import s from '../Dialogs.module.css';
import {Field, Form} from "react-final-form";
import {sendMessageAC} from "../../../redux/dialogs-reducer";

class MessageInput extends React.Component {
    render() {
        return (
            <div className={s.messageInput}>
                <AddMessageForm sendMessage={this.props.sendMessage} />
            </div>
        )
    }
}

const AddMessageForm = (props) => {
    return (
        <Form
            onSubmit={(values) => props.sendMessage(values.newMessageBody)}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="newMessageBody" component="textarea" />
                    <div><button type="submit">send</button></div>
                </form>
            )}>
        </Form>
    )
}

export default MessageInput;