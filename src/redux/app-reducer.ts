import { getAuthUserDataTC } from "./auth-reducer"
import { ThunkDispatch } from "redux-thunk"
import { RootReducerType } from "./redux-store"

const SET_INITIALIZED = "SET_INITIALIZED"

export type authInitialState = {
  initialized: boolean
}
const initialState: authInitialState = {
  initialized: false,
}

export const appReducer = (state: authInitialState = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: true }

    default:
      return state
  }
}

type ActionsType = ReturnType<typeof setInitializedAC>

export const setInitializedAC = () => {
  return { type: SET_INITIALIZED }
}

// Thunk

export const initializeAppTC = () => (dispatch: ThunkDispatch<RootReducerType, unknown, ActionsType>) => {
  dispatch(getAuthUserDataTC()).then(() => {
    dispatch(setInitializedAC())
  })
}
