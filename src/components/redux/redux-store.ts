import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)
export type StoreType = typeof store