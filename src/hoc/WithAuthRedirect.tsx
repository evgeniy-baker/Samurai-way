import React from 'react';
import {Redirect} from "react-router-dom";
import {RootReducerType} from "../redux/redux-store";
import {connect} from "react-redux";

export type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: RootReducerType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component : any) => {

    const RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Redirect to={"/Login"}/>
        return < Component {...props} />
    }

    const AuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return AuthRedirectComponent

}