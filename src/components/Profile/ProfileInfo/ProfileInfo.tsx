import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileComponentType} from "../Profile";
import {ProfileStatus} from "../ProfileStatus";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../../redux/redux-store";

export const ProfileInfo = (props: ProfileComponentType) => {

    const status = useSelector<RootReducerType, string>(state => state.profilePage.status)

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div>
                <img src="" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div>{<img src={props.profile.photos.large} alt=""/>}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                Avatar and description
                <ProfileStatus status={status}/>
            </div>
        </div>
    );
};