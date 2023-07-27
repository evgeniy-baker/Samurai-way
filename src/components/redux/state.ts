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
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (newPostText: string) => void
    updateNewMessageText: (newMessageText: string) => void
    //  -----
    _rerenderEntireTree: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
}

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
            newMessageText: '...'
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree(state: RootStateType) {
        console.log('Стейт изменился')
    },
    addPost()  {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree(this._state)
    },
    addMessage() {
        const newMessage: MessageType = {
            id: 6, message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._rerenderEntireTree(this._state)
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._rerenderEntireTree(this._state)
    },
    updateNewMessageText(newMessageText: string) {
        console.log(newMessageText)
        this._state.dialogsPage.newMessageText = newMessageText
        this._rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer // Наблюдатель
    }

    // subscribe(observer: (state: RootStateType) => void) {
    //     this._rerenderEntireTree = observer // Наблюдатель
    // }
}