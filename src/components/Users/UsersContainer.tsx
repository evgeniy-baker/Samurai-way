import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator, UserType} from "../redux/users-reducer";
import {RootReducerType} from "../redux/redux-store";

type mapStatePropsType = {
    users: UserType[]
}
type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: number) => { dispatch(followActionCreator(userID)) },
        unfollow: (userID: number) => { dispatch(unfollowActionCreator(userID)) },
        setUsers: (users: UserType[]) => { dispatch(setUsersActionCreator(users)) }
    }
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)