import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import {UserType} from "../redux/users-reducer";

export type ResponseType = {
    items: UserType[],
    totalCount: number,
    "error": null
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items)
            })

    }

    const userPhoto = 'https://www.svgrepo.com/show/425238/users-avatar.svg'

    return (
        <div>
            {props.users.map(u => <div key={u.id}>{
                <>
                    <section className={s.section}>
                    <span>
                        <div>
                            <img src={u.photos === null ? '' : userPhoto} alt="" className={s.userPhoto}/>
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
                        <span>
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </span>
                    </span>
                    </section>
                </>
            }</div>)}
        </div>
    );
};