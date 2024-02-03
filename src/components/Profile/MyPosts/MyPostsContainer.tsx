import React from 'react';
import {addPostAC, PostType, updateNewPostTextAC} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";



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

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
//     return {
//         addPost: () => { dispatch(addPostActionCreator()) },
//         updateNewPostText: (text: string) => { dispatch(updateNewPostTextActionCreator(text)) }
//     }
// }

export const MyPostsContainer = connect(mapStateToProps, {
        addPost: addPostAC,
        updateNewPostText: updateNewPostTextAC
})(MyPosts)

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)