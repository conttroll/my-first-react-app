import React from 'react';
import s from './../Dialogs.module.css';

class MessageItem extends React.Component {
    render() {
        return (
            <div className={s.message}>
                {this.props.msg}
            </div>
        )
    }
}

export default MessageItem;