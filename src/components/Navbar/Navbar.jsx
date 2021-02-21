import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/home" activeClassName={s.active}><button className={s.item}>Home</button></NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}><button className={s.item}>Dialogs</button></NavLink>
            <NavLink to="/news" activeClassName={s.active}><button className={s.item}>News</button></NavLink>
            <NavLink to="/music" activeClassName={s.active}><button className={s.item}>Music</button></NavLink>
        </nav>
    )
}

export default Nav;