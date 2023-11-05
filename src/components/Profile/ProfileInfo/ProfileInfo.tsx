import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="" alt=""/>
            </div>
            <div className={s.descriptionBlock}>Avatar and description</div>
        </div>
    );
};