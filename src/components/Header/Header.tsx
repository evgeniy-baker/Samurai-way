import React from "react"
import s from "./Header.module.css"
import { NavLink } from "react-router-dom"
import { AuthPropsType } from "./HeaderContainerAPI"
import { useDispatch } from "react-redux"
import { logoutTC } from "../../redux/auth-reducer"

export const Header = (props: AuthPropsType) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutTC())
  }

  return (
    <header className={s.header}>
      <img src="" alt="" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.auth.login} {props.isAuth ? <button onClick={logoutHandler}>Log out</button> : ""}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
