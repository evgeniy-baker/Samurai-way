import React from "react"
import { connect } from "react-redux"
import { UsersAPI } from "./UsersAPI"
import { getUsersTC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UserType } from "../../redux/users-reducer"
import { RootReducerType } from "../../redux/redux-store"
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect"
import { compose } from "redux"
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors"

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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
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
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    getUsersTC,
  }),
  WithAuthRedirect,
)(UsersAPI)

export type UsersPropsType = mapStatePropsType & mapDispatchPropsType
