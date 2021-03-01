import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userAva from '../../assets/images/user-img.png';

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={styles.pages}>
                {pages.map(page => {
                    return <span className={this.props.currentPage === page && styles.currentPage} onClick={(e) => {this.onPageChanged(page)} }>{page}</span>
                })}
            </div>
            {
                this.props.users.map(elem => {
                    return <div key={elem.id} className={styles.user}>
                        <img className={styles.img} src={
                            elem.photos.small !== null ? elem.photos.small : userAva } alt=""/>
                        <div>
                            <strong><span>{elem.name}</span></strong>
                            <div>elem.location.country</div>
                            <div>elem.location.city</div>
                            <div>
                                {elem.followed ? <button onClick={() => {this.props.unfollow(elem.id)}}>Unfollow</button>
                                    : <button onClick={() => {this.props.follow(elem.id)}}>Follow</button>}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>;
    }
}

export default Users;