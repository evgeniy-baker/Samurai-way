import React from 'react';
import s from "./ProfileInfo.module.css";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfilePropsType} from "../ProfileAPI";

export const ProfileInfo = (props: ProfilePropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div>
                <img src="" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <section>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    {<img src={props.profile.photos.large} alt=""/>}
                </section>
                Avatar and description
            </div>
        </div>
    );
};