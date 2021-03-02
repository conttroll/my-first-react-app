import React from 'react';
import styles from './Users.module.css';
import userAva from '../../assets/images/user-img.png';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <>
        { props.isFetched ? <div className={styles.ldsDualRing}></div> : null }
        <div className={styles.pages}>
            {pages.map(page => {
                return <span className={props.currentPage === page && styles.currentPage} onClick={(e) => {props.onPageChanged(page)} }>{page}</span>
            })}
        </div>
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
    </>;
}

export default Users;