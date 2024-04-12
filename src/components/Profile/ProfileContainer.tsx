import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType, setStatusAC, updateStatusTC} from "../../redux/profile-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {Redirect, useParams} from "react-router-dom";
import {getStatusAPI, updateStatusAPI} from "../../api/api";

export const ProfileContainer = () => {

    const dispatch = useDispatch()
    const profile = useSelector<RootReducerType, ProfileType | null>(state => state.profilePage.profile)
    const isAuth = useSelector<RootReducerType, boolean>(state => state.auth.isAuth)
    // const status = useSelector<RootReducerType, string>(state => state.profilePage.status)

    let {userID} = useParams<{ userID: string }>()

    if (!userID) {
        userID = String(29584)
    }   // Если null, вернуть мой профиль

    useEffect(() => {
        dispatch(getUserProfileTC(Number(userID)))
        dispatch(getStatusTC(Number(userID)))
    }, [])

    if (!isAuth) return <Redirect to={'/Login'}/>

    return (
        <Profile profile={profile}/>
    )

}