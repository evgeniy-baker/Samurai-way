import { ActionsType } from "./store"

const ADD_MESSAGE = "ADD-MESSAGE"
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}
export type DialogPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  // newMessageText: string //  value textarea из компоненты Dialogs
}

const initialState: DialogPageType = {
  dialogs: [
    { id: 1, name: "Артём" },
    { id: 2, name: "Айлин" },
    { id: 3, name: "Диана" },
    { id: 4, name: "Герман" },
    { id: 5, name: "Илья" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "Hi" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Hi" },
  ],
  // newMessageText: "",
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType): DialogPageType => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        // id: 6, message: state.newMessageText
        id: 6,
        message: action.newMessageBody,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }

    // case UPDATE_NEW_MESSAGE_TEXT:
    //   return {
    //     ...state,
    //     newMessageText: action.newMessageText,
    //   }

    default:
      return state
  }
}

export const addMessageActionCreator = (newMessageBody: string): ActionsType => ({ type: ADD_MESSAGE, newMessageBody })

// export const updateNewMessageTextActionCreator = (text: string): ActionsType => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   newMessageText: text,
// })

export default dialogsReducer
