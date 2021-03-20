import s from './Main.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";
import {updateStatus} from "../../redux/profile-reducer";

const Main = (props) => {
    return (
        <section className={s.main}>
            <ProfileInfo profile={props.profile} />
            <ProfileStatus updateStatus={props.updateStatus} status={props.status} />
            <MyPostsContainer />
        </section>
    )
}

export default Main;