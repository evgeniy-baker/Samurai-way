type PostType = {
    id?: number
    message: string
    likesCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}



type ProfilePageType = {
    posts: PostType[]
    newPostText: string // value textarea из компоненты MyPost
}
type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string  //  value textarea из компоненты Dialogs
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}



// export type StoreType = {
//     _state: RootStateType
//     getState: () => RootStateType
//
//     _rerenderEntireTree: (state: RootStateType) => void
//     subscribe: (observer: (state: RootStateType) => void) => void
//     dispatch: (action: ActionsType) => void
// }



// ---------------------------------------------------- ACTION TYPE

export type ActionsType = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageTextActionType | ProfileTypeAT | SetStatusAT

type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newPostText: string
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
    newMessageBody: string
}
type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessageText: string
}
type ProfileTypeAT = {
    type: "SET_USER_PROFILE"
    profile: any
}
type SetStatusAT = {
    type: "SET_STATUS"
    status: string
}



// ---------------------------------------------------- STORE

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hello, how are you?', likesCount: 5},
//                 {id: 2, message: 'Hello...', likesCount: 10}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Артём'},
//                 {id: 2, name: 'Айлин'},
//                 {id: 3, name: 'Диана'},
//                 {id: 4, name: 'Герман'},
//                 {id: 5, name: 'Илья'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'Yo'},
//                 {id: 3, message: 'Hi'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Hi'},
//             ],
//             newMessageText: ''
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _rerenderEntireTree(state: RootStateType) {
//         console.log('Стейт изменился')
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer // Наблюдатель
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerenderEntireTree(this._state)
//     }
//
// }