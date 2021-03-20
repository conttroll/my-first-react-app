import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetched,
    unfollow,
    getUsers
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (page) => {
        this.props.getUsers(this.props.pageSize, page);
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetched={this.props.isFetched}
            followingInProgress={this.props.followingInProgress}
        />
    }
}

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetched,
    getUsers
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);