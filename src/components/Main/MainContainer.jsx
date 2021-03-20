import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {setUserProfile, getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class MainContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15533;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Main { ...this.props }
                  status={this.props.status}
                  profile={this.props.profile}
                  updateStatus={this.props.updateStatus} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.mainPage.userProfile,
    status: state.mainPage.profileStatus
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(MainContainer);