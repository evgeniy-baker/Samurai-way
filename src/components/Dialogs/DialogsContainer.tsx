import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../redux/redux-store";

type DialogsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsType) => {

    const onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    const addMessageHandler = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return <Dialogs dialogsPage={props.store.getState().dialogsPage}
                    updateNewMessageText={onMessageChange}
                    addMessage={addMessageHandler}
    />
};