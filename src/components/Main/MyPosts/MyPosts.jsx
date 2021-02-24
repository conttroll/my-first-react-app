import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const addNewPost = () => {
        props.addNewPost();
    }

    const setNewPostText = (e) => {
        const text = e.target.value;
        props.setNewPostText(text);
    }

    const posts =
        props
            .mainPage
            .postsData
            .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    return (
        <div>
            <div>
                <textarea value={props.mainPage.newPostText} onChange={setNewPostText} />
                <button onClick={ addNewPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;