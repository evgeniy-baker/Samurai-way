import {ActionsType, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
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
}) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = newParam
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
