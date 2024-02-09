import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersType) => {

    const userPhoto = 'https://www.svgrepo.com/show/425238/users-avatar.svg'

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 100
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div>
                {pages.map(p => {
                    return <span key={p}
                                 onClick={() => props.onPageChanged(p)}
                                 className={props.currentPage === p ?
                                     s.selectedPage
                                     : ''}>{p}
                    </span>
                })}
            </div>

            {props.users.map(u => <div key={u.id}>{
                <>
                    <section className={s.section}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small
                                        : userPhoto} alt="" className={s.userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>{u.followed ?
                                    <button onClick={() => props.unfollow(u.id)}>Followed</button>
                                    : <button onClick={() => props.follow(u.id)}>Unfollowed</button>}
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
        </>
    )
};