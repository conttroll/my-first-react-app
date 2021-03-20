import React from 'react';
import Header from "./Header";
import {logout, setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setUserData();
    }

    render() {
        return (
            <Header { ...this.props } logout={this.props.logout} />
        )
    }
}

export const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setUserData, logout })(HeaderContainer);
