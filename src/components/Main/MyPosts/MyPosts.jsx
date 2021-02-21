import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    const addNewPost = () => {
        props.addNewPost();
    }

    const setNewPostText = (e) => {
        const text = e.target.value;
        props.setNewPostText(text);
    }

    return (
        <div>
            <div>
                <textarea value={props.newPostText} onChange={setNewPostText} />
                <button onClick={ addNewPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {props.posts}
            </div>
        </div>
    )
}

export default MyPosts;