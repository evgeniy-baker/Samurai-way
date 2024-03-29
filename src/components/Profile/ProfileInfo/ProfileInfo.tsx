import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileComponentType} from "../Profile";

export const ProfileInfo = (props: ProfileComponentType) => {

    // debugger

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
            </div>
        </div>
    );
};