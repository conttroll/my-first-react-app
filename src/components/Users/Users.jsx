import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userAva from '../../assets/images/user-img.png';

const Users = (props) => {
    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            });
    }

    return <div>
        {
            props.users.map(elem => {
                return <div key={elem.id} className={styles.user}>
                    <img className={styles.img} src={
                        elem.photos.small !== null ? elem.photos.small : userAva } alt=""/>
                    <div>
                        <strong><span>{elem.name}</span></strong>
                        <div>elem.location.country</div>
                        <div>elem.location.city</div>
                        <div>
                            {elem.followed ? <button onClick={() => {props.unfollow(elem.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(elem.id)}}>Follow</button>}
                        </div>
                    </div>
                </div>
            })
        }
    </div>;
}

export default Users;