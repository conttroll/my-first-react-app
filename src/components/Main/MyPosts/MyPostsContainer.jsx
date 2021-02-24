import React from 'react';
import {addPostActionCreator, newPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => dispatch(addPostActionCreator()),
        setNewPostText: (text) => dispatch(newPostTextActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;