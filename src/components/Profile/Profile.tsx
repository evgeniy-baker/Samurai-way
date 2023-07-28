import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                // addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                // updateNewPostText={props.updateNewPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;