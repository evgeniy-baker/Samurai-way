import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type ReducersStateType = ReturnType<typeof reducers>
export type StoreType = typeof store

export let store = createStore(reducers)