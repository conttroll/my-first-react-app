import React from 'react';
import styles from './Users.module.css';
import userAva from '../../assets/images/user-img.png';
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import samuraiAPI from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <>
        {props.isFetched ? <Preloader/> : null}
        <div className={styles.pages}>
            {pages.map(page => {
                return <span className={props.currentPage === page && styles.currentPage} onClick={(e) => {
                    props.onPageChanged(page)
                }}>{page}</span>
            })}
        </div>
        {
            props.users.map(elem => {
                return <div key={elem.id} className={styles.user}>
                    <NavLink to={`/profile/${elem.id}`}>
                        <img className={styles.img} src={
                            elem.photos.small !== null ? elem.photos.small : userAva} alt=""/>
                    </NavLink>
                    <div>
                        <strong><span>{elem.name}</span></strong>
                        <div>elem.location.country</div>
                        <div>elem.location.city</div>
                        <div>
                            {elem.followed ? <button onClick={() => {
                                    samuraiAPI.unfollowAPI(elem.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(elem.id)
                                            }
                                        });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    samuraiAPI.followAPI(elem.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(elem.id)
                                            }
                                        });
                                }
                                }>Follow</button>}
                        </div>
                    </div>
                </div>
            })
        }
    </>;
}

export default Users;