import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import { usersReducer } from "./users-reducer"
import { authReducer } from "./auth-reducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import { appReducer } from "./app-reducer"

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})
export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunk))

// export type StoreType = typeof store

//@ts-ignore
window.store = store
