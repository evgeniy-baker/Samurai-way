import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// type ProfileType = {
//     store: StoreType // для прокидывания в контейнерную компоненту MyPostsContainer
// }

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};