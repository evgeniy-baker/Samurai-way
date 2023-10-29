import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ReducersStateType, store} from "./components/redux/redux-store";

const rerenderEntireTree = (state: ReducersStateType) => {
    ReactDOM.render(
        <App store={store}
             state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
} )