import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;