import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainerAPI";

function App() {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path={'/profile/:userID?'} render={() => <ProfileContainer />}></Route>
                        <Route path={'/dialogs'} render={() => <DialogsContainer />}></Route>
                        <Route path={'/users'} render={() => <UsersContainer />}></Route>
                        <Route path={'/news'} component={News}></Route>
                        <Route path={'/music'} component={Music}></Route>
                        <Route path={'/settings'} component={Settings}></Route>

                    </Switch>

                </div>
            </div>
    );
}

export default App;