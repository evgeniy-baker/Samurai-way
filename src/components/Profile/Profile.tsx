import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, StoreType} from "../redux/state";

type ProfileType = {
    store: StoreType
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                store={props.store}
                posts={props.store._state.profilePage.posts}
                // posts={props.profilePage.posts}
                addPost={props.store.addPost}
                // addPost={props.addPost}
                newPostText={props.store._state.profilePage.newPostText}
                // newPostText={props.profilePage.newPostText}
                updateNewPostText={props.store.updateNewPostText}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;