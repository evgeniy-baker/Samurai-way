import React from 'react';
import {connect} from "react-redux";
import {UsersAPI} from "./UsersAPI";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
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

export const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userID: number) => { dispatch(followAC(userID)) },
        unfollow: (userID: number) => { dispatch(unfollowAC(userID)) },
        setUsers: (users: UserType[]) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (pageNumber: number) => { dispatch(setCurrentPageAC(pageNumber)) },
        setTotalUsersCount: (totalCount: number) => { dispatch(setTotalUsersCountAC(totalCount)) }
    }
}

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)