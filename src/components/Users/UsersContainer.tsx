import React from 'react';
import {connect} from "react-redux";
import {UsersClass} from "./UsersClass";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    UserType
} from "../redux/users-reducer";
import {RootReducerType} from "../redux/redux-store";

type mapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}

const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: number) => { dispatch(followActionCreator(userID)) },
        unfollow: (userID: number) => { dispatch(unfollowActionCreator(userID)) },
        setUsers: (users: UserType[]) => { dispatch(setUsersActionCreator(users)) },
        setCurrentPage: (pageNumber: number) => { dispatch(setCurrentPageActionCreator(pageNumber)) },
        setTotalUsersCount: (totalCount: number) => { dispatch(setTotalUsersCountActionCreator(totalCount)) }
    }
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)