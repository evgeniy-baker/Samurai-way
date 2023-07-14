let rerenderEntireTree = (state: RootStateType) => {
    console.log('Стейт изменился')
}

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
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export const state: RootStateType = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const newMessage: MessageType = {
        id: 6, message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}
export const updateNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText
    rerenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer // Наблюдатель
}