import React from "react";
import {UserType} from "../redux/users-reducer";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";


export type ResponseType = {
    items: UserType[],
    totalCount: number,
    error: null
}

export class UsersAPI extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props)
    }

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
        />
    }

}