import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormControls/FormControls";

class MyPosts extends React.Component {

    addNewPost = (newPostText) => {
        this.props.addNewPost(newPostText);
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
                    <AddNewPost addNewPost={this.addNewPost} />
                </div>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        )
    }
}

const AddNewPost = (props) => {
    const maxLength20 = maxLengthCreator(20);
    return (
        <Form
            onSubmit={(values, form, callback) => props.addNewPost(values.newPostText)}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field component={Textarea} name="newPostText" validate={composeValidators(required, maxLength20)} />
                    <div><button>add</button></div>
                </form>
            )}>
        </Form>
    )
}

export default MyPosts;