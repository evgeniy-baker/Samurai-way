import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootReducerType, store} from "./components/redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const rerenderEntireTree = (state: RootReducerType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App // store={store}
                     // state={state}
                     // dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})