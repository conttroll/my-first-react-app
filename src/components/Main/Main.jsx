import s from './Main.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {
    return (
        <section className={s.main}>
            <ProfileInfo />
            <MyPostsContainer
                state={props.state}
                store={props.store}
            />
        </section>
    )
}

export default Main;