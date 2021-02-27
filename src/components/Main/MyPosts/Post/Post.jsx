import React from 'react';
import s from './Post.module.css';

class Post extends React.Component {
    render() {
        return (
            <div className={s.item}>
                <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png" />
                <div>{this.props.message}</div>
                <span className={s.like}>Like {this.props.likesCount}</span>
            </div>
        )
    }
}

export default Post;