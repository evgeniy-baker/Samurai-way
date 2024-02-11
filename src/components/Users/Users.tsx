import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
}
type ResponeseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
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

            {props.users.map(u => {
                return <div key={u.id}>{
                    <>
                        <section className={s.section}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small
                                            : userPhoto} alt="" className={s.userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed ?
                                        <button onClick={() =>

                                            axios.delete<ResponeseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true, headers: {
                                                    'API-KEY': '02fa08f9-ef7b-443d-836c-7fbf12202761'
                                                }
                                            })
                                                .then((res) => {
                                                    console.log(res)
                                                    if (res.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                })

                                        }>Unfollow</button>

                                        : <button onClick={() =>

                                            axios.post<ResponeseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true, headers: {
                                                    'API-KEY': '02fa08f9-ef7b-443d-836c-7fbf12202761'}})
                                                .then((res) => {
                                                    if (res.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                })

                                        }>Follow</button>}

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
                }</div>
            })}
        </>
    )
};