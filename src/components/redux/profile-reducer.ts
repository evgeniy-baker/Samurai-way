import {ActionsType, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }

}

export const addPostActionCreator = (): ActionsType  => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): ActionsType =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default profileReducer
