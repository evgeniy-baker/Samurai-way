import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css"

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photo: 'https://www.svgrepo.com/show/475148/bird.svg',
                    followed: false,
                    fullName: 'Артём',
                    status: 'offline',
                    location: {city: 'Saint Petersburg', country: 'Russia'}
                },
                {
                    id: 2,
                    photo: 'https://www.svgrepo.com/show/475148/bird.svg',
                    followed: true,
                    fullName: 'Айлин',
                    status: 'online',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photo: 'https://www.svgrepo.com/show/475148/bird.svg',
                    followed: false,
                    fullName: 'Диана',
                    status: 'offline',
                    location: {city: 'Saint Petersburg', country: 'Russia'}
                },
                {
                    id: 4,
                    photo: 'https://www.svgrepo.com/show/475148/bird.svg',
                    followed: true,
                    fullName: 'Герман',
                    status: 'online',
                    location: {city: 'Moscow', country: 'Russia'}
                }
            ]
        )
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>{
                <>
                    <section className={s.section}>
                    <span>
                        <div>
                            <img src={u.photo} alt="" className={s.userPhoto}/>
                        </div>
                        <div>{u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Followed</button>
                            : <button onClick={() => props.follow(u.id)}>Unfollowed</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </section>
                </>
            }</div>)}
        </div>
    );
};