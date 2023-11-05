import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateNewMessageText: (text: string) => {dispatch(updateNewMessageTextActionCreator(text))},
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)