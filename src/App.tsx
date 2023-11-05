import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";

// type AppState = {
//     store: StoreType
//     // state: RootStateType
//     // dispatch: (action: ActionsType) => void
// }

function App() {   //props: AppState

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path={'/profile'} render={() => <Profile />}></Route>
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}></Route>
                    <Route path={'/news'} component={News}></Route>
                    <Route path={'/music'} component={Music}></Route>
                    <Route path={'/settings'} component={Settings}></Route>

                </div>
            </div>
    );
}

export default App;