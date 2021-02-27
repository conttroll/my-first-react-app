import Dialogs from "./Dialogs";
import {sendMessageActionCreator, writeNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

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