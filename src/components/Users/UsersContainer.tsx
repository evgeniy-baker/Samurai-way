import React from 'react';
import {connect} from "react-redux";
import {UsersAPI} from "./UsersAPI";
import {getUsersTC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UserType} from "../../redux/users-reducer";
import {RootReducerType} from "../../redux/redux-store";

type mapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchPropsType = {
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

export const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export const UsersContainer = connect (mapStateToProps, {
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    getUsersTC
})(UsersAPI)

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType