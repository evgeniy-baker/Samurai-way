import React from 'react';
import s from './MyPosts.module.css'
import Post from "../Post/Post";
import {ActionsType, PostType} from "../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../redux/redux-store";

type MyPostType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostType) => {

    const state = props.store.getState()

    const onPostChange = (text: string) => {    // обработчик события для value textarea
            const action = updateNewPostTextActionCreator(text)
            props.store.dispatch(action)
    }

    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPostHandler}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />;
};

export default MyPostsContainer;