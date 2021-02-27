import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';

class DialogItem extends React.Component {
    render() {
        let path = `/dialogs/${this.props.id}`;

        return (
            <div className={s.dialog}>
                <NavLink to={path}>{this.props.name}</NavLink>
            </div>
        )
    }
}

export default DialogItem;