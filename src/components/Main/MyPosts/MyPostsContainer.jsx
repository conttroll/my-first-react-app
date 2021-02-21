import React from 'react';
import Post from './Post/Post.jsx';
import {addPostActionCreator, newPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                const addNewPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const setNewPostText = (text) => {
                    store.dispatch(newPostTextActionCreator(text));
                }

                const posts =
                    state
                        .mainPage
                        .postsData
                        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

                return (
                    <MyPosts
                        addNewPost={addNewPost}
                        setNewPostText={setNewPostText}
                        posts={posts}
                        newPostText={state.mainPage.newPostText}/>
                )
            } }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;