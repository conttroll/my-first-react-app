import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div key={props.profile.userId}>
                <img src={props.profile.photos.large} alt=""/>
                <div><strong>{props.profile.fullName}</strong></div>
            </div>
        </div>
    )
}

export default ProfileInfo;