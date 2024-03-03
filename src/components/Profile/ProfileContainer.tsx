import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/profile-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {useParams} from "react-router-dom";

export const ProfileContainer = () => {

    const dispatch = useDispatch()
    const profile = useSelector<RootReducerType, ProfileType | null>(state => state.profilePage.profile)

    let { userID } = useParams<{ userID: string}>()

    useEffect(() => {
        if (!userID) {
            userID = String(2)
        }

        dispatch(getUserProfileTC(Number(userID)))

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
        //     .then((res) => {
        //         dispatch(setUserProfileAC(res.data))
        //     })

    }, [])



    return (
        <Profile profile={profile}/>
    )

}