import {ActionsType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type PostType = {
    id?: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string     // value textarea из компоненты MyPost
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hello, how are you?', likesCount: 5},
        {id: 2, message: 'Hello...', likesCount: 10}
    ],
    newPostText: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType, newParam: PostType = {
    id: 5,
    message: state.newPostText,
    likesCount: 0
}): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = newParam
            return {...state,
                posts: [...state.posts, newPost], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            debugger
            return {...state,
                newPostText: action.newPostText}

        default:
            return state
    }

}

export const addPostAC = (): ActionsType  => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): ActionsType =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export default profileReducer
