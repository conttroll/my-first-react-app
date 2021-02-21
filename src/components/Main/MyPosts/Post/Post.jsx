import s from './Post.module.css';

const Post = (props /*just an object*/) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png" />
            <div>{props.message}</div>
            <span className={s.like}>Like {props.likesCount}</span>
        </div>
    )
}

export default Post;