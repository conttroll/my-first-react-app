import s from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.msg}
        </div>
    )
}

export default MessageItem;