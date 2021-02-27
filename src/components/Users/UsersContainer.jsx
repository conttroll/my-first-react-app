import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";


const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;