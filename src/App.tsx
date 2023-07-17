import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Profile/Music/Music";
import Settings from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {RootStateType, StoreType} from "./components/redux/state";

type AppState = {
    store: StoreType
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

function App (props: AppState) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>

                    <Route path={'/profile'} render={ () => <Profile store={props.store}
                                                                     profilePage={props.store._state.profilePage}
                                                                     addPost={props.store.addPost}
                                                                     updateNewPostText={props.store.updateNewPostText}
                    /> }></Route>

                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                     addMessage={props.addMessage}
                                                                     updateNewMessageText={props.updateNewMessageText}
                    /> }></Route>

                    <Route path={'/news'} component={News}></Route>
                    <Route path={'/music'} component={Music}></Route>
                    <Route path={'/settings'} component={Settings}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;