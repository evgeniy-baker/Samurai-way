import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addMessage,
    addPost,
    RootStateType,
    state,
    subscribe,
    updateNewMessageText,
    updateNewPostText
} from "./components/redux/state";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updateNewMessageText={updateNewMessageText}
        />,
        document.getElementById('root')
    );
};

rerenderEntireTree(state)

subscribe(rerenderEntireTree)