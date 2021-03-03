import s from './Main.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Main = (props) => {
    return (
        <section className={s.main}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </section>
    )
}

export default Main;