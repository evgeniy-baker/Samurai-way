import React from "react"
import { UsersPropsType } from "./UsersContainer"
import { Users } from "./Users"
import { Preloader } from "../Common/Preloader/Preloader"

export class UsersAPI extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersTC(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          // follow={this.props.follow}
          // unfollow={this.props.unfollow}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          // toggleFollowingProgress={this.props.toggleFollowingProgress}
        />
      </>
    )
  }
}
