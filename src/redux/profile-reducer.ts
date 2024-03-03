import {ActionsType} from "./store";
import {getProfileAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type PostType = {
    id?: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string     // value textarea из компоненты MyPost
    profile: ProfileType | null
}

type ContactsProfileType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube:null
    github: string
    mainLink: null
}
type PhotosProfileType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string,
    fullName: string,
    userId: number
    photos: PhotosProfileType
}


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hello, how are you?', likesCount: 5},
        {id: 2, message: 'Hello...', likesCount: 10}
    ],
    newPostText: '',
    profile: null
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionsType, newParam: PostType = {
    id: 5,
    message: state.newPostText,
    likesCount: 0,
}): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = newParam
            return {...state,
                posts: [...state.posts, newPost], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: action.newPostText}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }

}

export const addPostAC = (): ActionsType  => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string): ActionsType =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
export const setUserProfileAC = (profile: ProfileType): ActionsType => ({type: SET_USER_PROFILE, profile})


// Thunk
export const getUserProfileTC = (userID: number) => (dispatch: Dispatch) => {
    getProfileAPI(Number(userID))
        .then((res) => {
            dispatch(setUserProfileAC(res.data))
        })
}



export default profileReducer
