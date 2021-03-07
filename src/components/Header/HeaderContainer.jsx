import React from 'react';
import Header from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import samuraiAPI from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        samuraiAPI.getLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header { ...this.props } />
        )
    }
}

export const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
