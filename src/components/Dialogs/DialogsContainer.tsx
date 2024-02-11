import React from 'react';
import {addMessageActionCreator, DialogPageType, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogsPage: DialogPageType
}
type mapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateNewMessageText: (text: string) => {dispatch(updateNewMessageTextActionCreator(text))},
    }
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchPropsType

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)