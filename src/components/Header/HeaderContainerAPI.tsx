import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {authInitialState, getAuthUserDataTC} from "../../redux/auth-reducer";

export class HeaderContainerAPI extends React.Component<AuthPropsType>{

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}



type MapStateType = {
    auth: authInitialState
    isAuth: boolean
}
type mapDispatchType = {
    getAuthUserDataTC: () => void
}

const mapStateToProps = (state: RootReducerType): MapStateType => ({
    auth: state.auth,
    isAuth: state.auth.isAuth
})

export type AuthPropsType = MapStateType & mapDispatchType
export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserDataTC
})(HeaderContainerAPI)