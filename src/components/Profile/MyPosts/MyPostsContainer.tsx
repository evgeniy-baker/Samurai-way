import React from 'react';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from 'redux';

type mapStatePropsType = {
    posts: PostType[]
    newPostText: string
}
type mapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: RootReducerType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (text: string) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)