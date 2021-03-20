import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header id={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
            <span className="header_title">Learning React</span>
            { (props.isAuth) ? <div><p>{props.login}</p><button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}><div className={s.login}>Login</div></NavLink> }
        </header>
    )
}

export default Header;