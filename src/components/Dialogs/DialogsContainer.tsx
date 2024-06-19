import {addMessageActionCreator, DialogPageType, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: DialogPageType
    // isAuth: boolean
}
type mapDispatchPropsType = {
    addMessage: (newMessageBody: string) => void
    updateNewMessageText: (text: string) => void
}

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addMessage: (newMessageBody: string) => {dispatch(addMessageActionCreator(newMessageBody))},
        updateNewMessageText: (text: string) => {dispatch(updateNewMessageTextActionCreator(text))},
    }
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchPropsType

// const AuthRedirectComponent = WithAuthRedirect(Dialogs)

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)
(Dialogs)
