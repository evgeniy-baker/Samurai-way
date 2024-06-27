import React, { useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { Route, Switch } from "react-router-dom"
import News from "./components/News/News"
import Music from "./components/Profile/Music/Music"
import Settings from "./components/Settings/Settings"
import { DialogsContainer } from "./components/Dialogs/DialogsContainer"
import { UsersContainer } from "./components/Users/UsersContainer"
import { ProfileContainer } from "./components/Profile/ProfileContainer"
import { HeaderContainer } from "./components/Header/HeaderContainerAPI"
import { Login } from "./components/Login/Login"
import { getAuthUserDataTC } from "./redux/auth-reducer"
import { useDispatch, useSelector } from "react-redux"
import { RootReducerType } from "./redux/redux-store"
import { Preloader } from "./components/Common/Preloader/Preloader"
import { initializeAppTC } from "./redux/app-reducer"

function App() {
  const dispatch = useDispatch()
  const initialized = useSelector<RootReducerType, boolean>((state) => state.app.initialized)

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!initialized) {
    return <Preloader />
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path={"/profile/:userID?"} render={() => <ProfileContainer />}></Route>
          <Route path={"/dialogs"} render={() => <DialogsContainer />}></Route>
          <Route path={"/users"} render={() => <UsersContainer />}></Route>
          <Route path={"/news"} component={News}></Route>
          <Route path={"/music"} component={Music}></Route>
          <Route path={"/settings"} component={Settings}></Route>
          <Route path={"/login"} component={Login}></Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
