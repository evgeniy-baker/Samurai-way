import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../redux/redux-store";
import {authInitialState, setAuthUserDataAC, setAuthUserDataAT} from "../redux/auth-reducer";

type ResponseType = {
    data: {id: string, login: string, email: string}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export class HeaderContainerAPI extends React.Component<AuthPropsType>{

    componentDidMount() {
        axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((res) => {
                if (res.data.resultCode === 0) {

                    const {id, email, login} = res.data.data
                    this.props.setAuthUserDataAC(id, email, login)

                }
            })
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
    setAuthUserDataAC: setAuthUserDataAT
}
const mapStateToProps = (state: RootReducerType): MapStateType => ({
    auth: state.auth,
    isAuth: state.auth.isAuth
})

export type AuthPropsType = MapStateType & mapDispatchType
export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserDataAC
})(HeaderContainerAPI)