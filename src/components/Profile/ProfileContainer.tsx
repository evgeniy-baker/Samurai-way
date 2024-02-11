import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {ProfileType, setUserProfileAC} from "../redux/profile-reducer";
import {RootReducerType} from "../redux/redux-store";
import {useParams} from "react-router-dom";

export const ProfileContainer = () => {

    const dispatch = useDispatch()
    const profile = useSelector<RootReducerType, ProfileType | null>(state => state.profilePage.profile)
    // const id = useSelector<RootReducerType, string | null>(state => state.auth.id)

    const { userID } = useParams<{ userID: string}>()
    // console.log('auth ', id)

    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then((res) => {
                dispatch(setUserProfileAC(res.data))
            })

    }, [])



    return (
        <Profile profile={profile}/>
    )

}