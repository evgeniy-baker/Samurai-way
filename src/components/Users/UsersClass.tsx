import React from "react";
import s from "./Users.module.css";
import {UserType} from "../redux/users-reducer";
import axios from "axios";

type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    //
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (count: number) => void
}
export type ResponseType = {
    items: UserType[],
    totalCount: number,
    error: null
}

export class UsersClass extends React.Component<UsersType> {

    userPhoto = 'https://www.svgrepo.com/show/425238/users-avatar.svg'

    constructor(props: UsersType) {
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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) / 100
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => this.onPageChanged(p)} className={this.props.currentPage === p ?
                            s.selectedPage
                            : ''}>{p}</span>
                    })}
                </div>

                {this.props.users.map(u => <div key={u.id}>{
                    <>
                        <section className={s.section}>
                            <span>
                                <div>
                                    <img src={u.photos === null ? '' : this.userPhoto} alt="" className={s.userPhoto}/>
                                </div>
                                <div>{u.followed ?
                                    <button onClick={() => this.props.unfollow(u.id)}>Followed</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Unfollowed</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                            </span>
                        </section>
                    </>
                }</div>)}
            </div>
        );
    }

}