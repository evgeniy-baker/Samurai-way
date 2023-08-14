import {ActionsType, DialogPageType, MessageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const initialState = {
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

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 6, message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }

}

export const addMessageActionCreator = (): ActionsType => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text: string): ActionsType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer