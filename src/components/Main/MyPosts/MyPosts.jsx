import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {

    addNewPost = () => {
        this.props.addNewPost();
    }

    setNewPostText = (e) => {
        const text = e.target.value;
        this.props.setNewPostText(text);
    }

    render() {
        const posts =
            this.props
                .mainPage
                .postsData
                .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

        return (
            <div>
                <div>
                    <textarea value={this.props.mainPage.newPostText} onChange={this.setNewPostText} />
                    <button onClick={ this.addNewPost }>Add post</button>
                </div>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        )
    }
}

export default MyPosts;