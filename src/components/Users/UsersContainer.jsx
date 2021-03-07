import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetched,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import samuraiAPI from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetched(true);
        samuraiAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.toggleIsFetched(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetched(true);
        samuraiAPI.getUsers(this.props.pageSize, page)
            .then(data => {
                this.props.toggleIsFetched(false);
                this.props.setUsers(data.items)
            });
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
        />
    }
}

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetched
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
;