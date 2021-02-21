import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <img src="https://lh3.googleusercontent.com/KF5TmdjUPCvndLku3hQ250MPmgIZ6anA9BHwijI7kZI4q46oy03wTVJqMZjar8ppcMkrVzob37UffFPyHZRhwXeI_A=w640-h400-e365-rj-sc0x00ffffff"/>
            <div>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;