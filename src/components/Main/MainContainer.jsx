import React from 'react';
import * as axios from "axios";
import Main from "./Main";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import samuraiAPI from "../../api/api";

class MainContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        samuraiAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            });
    }

    render() {
        return (
            <Main { ...this.props } profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.mainPage.userProfile
})

const WithUrlDataContainerComponent = withRouter(MainContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);