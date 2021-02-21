import s from './Header.module.css';

const Header = () => {
    return (
        <header id={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
            <span className="header_title">Learning React</span>
        </header>
    )
}

export default Header;
