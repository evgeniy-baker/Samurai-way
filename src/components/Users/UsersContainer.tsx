import React from 'react';
import {connect} from "react-redux";
import {UsersAPI} from "./UsersAPI";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../redux/users-reducer";
import {RootReducerType} from "../redux/redux-store";

type mapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         follow: (userID: number) => { dispatch(followAC(userID)) },
//         unfollow: (userID: number) => { dispatch(unfollowAC(userID)) },
//         setUsers: (users: UserType[]) => { dispatch(setUsersAC(users)) },
//         setCurrentPage: (pageNumber: number) => { dispatch(setCurrentPageAC(pageNumber)) },
//         setTotalUsersCount: (totalCount: number) => { dispatch(setTotalUsersCountAC(totalCount)) },
//         toggleIsFetching: (isFetching: boolean) => { dispatch(toggleIsFetchingAC(isFetching)) }
//     }
// }

export const UsersContainer = connect (mapStateToProps, {
    follow: followAC, unfollow: unfollowAC,
    setUsers: setUsersAC, setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC, toggleIsFetching: toggleIsFetchingAC
})(UsersAPI)

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)