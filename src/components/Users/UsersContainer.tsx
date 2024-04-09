import React from 'react';
import {connect} from "react-redux";
import {UsersAPI} from "./UsersAPI";
import {getUsersTC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UserType} from "../../redux/users-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {Dialogs} from "../Dialogs/Dialogs";
import {compose} from "redux";

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

// const AuthRedirectComponent = WithAuthRedirect(UsersAPI)

// export const UsersContainer = connect (mapStateToProps, {
//     setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     setTotalUsersCount: setTotalUsersCountAC,
//     getUsersTC
// })(AuthRedirectComponent)

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers: setUsersAC, setCurrentPage: setCurrentPageAC, setTotalUsersCount: setTotalUsersCountAC, getUsersTC
    }),
    WithAuthRedirect
)(UsersAPI)

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType