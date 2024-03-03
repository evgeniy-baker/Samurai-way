import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/profile-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {Redirect, useParams} from "react-router-dom";

export const ProfileContainer = () => {

    const dispatch = useDispatch()
    const profile = useSelector<RootReducerType, ProfileType | null>(state => state.profilePage.profile)
    const isAuth = useSelector<RootReducerType, boolean>(state => state.auth.isAuth)

    let {userID} = useParams<{ userID: string }>()

    if (!userID) {
        userID = String(2)
    }   // Если null, вернуть профиль Димыча

    useEffect(() => {

        dispatch(getUserProfileTC(Number(userID)))

    }, [])

    if (!isAuth) return <Redirect to={'/Login'}/>

    return (
        <Profile profile={profile}/>
    )

}