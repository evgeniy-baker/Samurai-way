import React from 'react';
import {connect} from "react-redux";
import {UsersAPI} from "./UsersAPI";
import {
    followAC, getUsersTC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {RootReducerType} from "../../redux/redux-store";

type mapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    // followingInProgress: 'idle' | 'progress'
}
type mapDispatchPropsType = {
    // follow: (userID: number) => void
    // unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingProgress: (userId: number, followingStatus: 'idle' | 'progress') => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

export const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        // followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect (mapStateToProps, {
    // follow: followAC,
    // unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    // toggleIsFetching: toggleIsFetchingAC,
    // toggleFollowingProgress: toggleFollowingProgressAC,
    getUsersTC
})(UsersAPI)

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType