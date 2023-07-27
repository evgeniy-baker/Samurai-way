import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from "./components/redux/state";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App store={store}
             //  state={state}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateNewMessageText={store.updateNewMessageText.bind(store)}
        />,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)