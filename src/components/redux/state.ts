import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


export type PostType = {
    id?: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string // value textarea из компоненты MyPost
}
export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string  //  value textarea из компоненты Dialogs
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}



export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    //  -----
    // addPost: () => void
    // addMessage: () => void
    // updateNewPostText: (newPostText: string) => void
    // updateNewMessageText: (newMessageText: string) => void
    //  -----
    _rerenderEntireTree: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsType) => void
}



// ---------------------------------------------------- ACTION TYPE

type AddPostActionType = {
    type: "ADD-POST"
    // newPostText: string
}
type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
    // newMessageText: string
}
type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessageText: string
}
export type ActionsType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageTextActionType



// ---------------------------------------------------- ACTION CREATOR

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export const addPostActionCreator = (): AddPostActionType  => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
export const addMessageActionCreator = (): AddMessageActionType => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT,newMessageText: text})



// ---------------------------------------------------- STORE

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, how are you?', likesCount: 5},
                {id: 2, message: 'Hello...', likesCount: 10}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Артём'},
                {id: 2, name: 'Айлин'},
                {id: 3, name: 'Диана'},
                {id: 4, name: 'Герман'},
                {id: 5, name: 'Илья'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Hi'},
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree(state: RootStateType) {
        console.log('Стейт изменился')
    },
    // addPost()  {
    //     const newPost: PostType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._rerenderEntireTree(this._state)
    // },
    // addMessage() {
    //     const newMessage: MessageType = {
    //         id: 6, message: this._state.dialogsPage.newMessageText
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._state.dialogsPage.newMessageText = ''
    //     this._rerenderEntireTree(this._state)
    // },
    // updateNewPostText(newPostText: string) {
    //     this._state.profilePage.newPostText = newPostText
    //     this._rerenderEntireTree(this._state)
    // },
    // updateNewMessageText(newMessageText: string) {
    //     console.log(newMessageText)
    //     this._state.dialogsPage.newMessageText = newMessageText
    //     this._rerenderEntireTree(this._state)
    // },
    subscribe(observer) {
        this._rerenderEntireTree = observer // Наблюдатель
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree(this._state)

        // if (action.type === "ADD-POST") {
        //     const newPost: PostType = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._rerenderEntireTree(this._state)
        // }
        // else if (action.type === "UPDATE-NEW-POST-TEXT") {
        //     this._state.profilePage.newPostText = action.newPostText
        //     this._rerenderEntireTree(this._state)
        // }
        // else if (action.type === "ADD-MESSAGE") {
        //     const newMessage: MessageType = {
        //         id: 6, message: this._state.dialogsPage.newMessageText
        //     }
        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state.dialogsPage.newMessageText = ''
        //     this._rerenderEntireTree(this._state)
        // }
        // else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        //     this._state.dialogsPage.newMessageText = action.newMessageText
        //     this._rerenderEntireTree(this._state)
        // }

    }

}