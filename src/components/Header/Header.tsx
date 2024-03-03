import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainerAPI";

export const Header = (props: AuthPropsType) => {

    return (
        <header className={s.header}>
            <img src="" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    props.auth.login : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );

};

export default Header;