import { getAuthAPI, loginAPI, logoutAPI } from "../api/api"
import { AnyAction, Dispatch } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { RootReducerType } from "./redux-store"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "SET_USER_DATA"

export type authInitialState = {
  id: null | string
  email: null | string
  login: null | string
  isAuth: boolean
}
const initialState: authInitialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state: authInitialState = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setAuthUserDataAC>

export const setAuthUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
  return { type: "SET_USER_DATA", payload: { id, email, login, isAuth } }
}

// Thunk

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
  return getAuthAPI().then((res) => {
    if (res.data.resultCode === 0) {
      const { id, email, login } = res.data.data
      dispatch(setAuthUserDataAC(id, email, login, true))
    }
  })
}

export const loginTC =
  (email: string, password: string) => (dispatch: ThunkDispatch<RootReducerType, unknown, AnyAction>) => {
    loginAPI(email, password).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
      } else {
        const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: message }))
      }
    })
  }

export const logoutTC = () => (dispatch: any) => {
  logoutAPI().then(() => {
    dispatch(setAuthUserDataAC(null, null, null, false))
  })
}
