import s from './Dialogs.module.css';

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
                {props.messageInput}
            </div>
        </div>
    )
}

export default Dialogs;