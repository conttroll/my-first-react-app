import { sendMessageAC } from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {

    render() {
        let dialogs = this.props
            .dialogsPage
            .dialogsData
            .map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

        let messages = this.props
            .dialogsPage
            .messagesData
            .map(message => <MessageItem msg={message.msg} />)

        return (
            <Dialogs {...this.props} sendMessage={this.props.sendMessage} dialogs={dialogs} messages={messages} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);

