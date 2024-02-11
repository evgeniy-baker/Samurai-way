const SET_USER_DATA = 'SET_USER_DATA'

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
    isAuth: false
}

export const authReducer = (state: authInitialState = initialState, action: ActionsType ) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

type ActionsType = ReturnType<setAuthUserDataAT>

export type setAuthUserDataAT = typeof setAuthUserDataAC

export const setAuthUserDataAC = (id: string,
                       email: string,
                       login: string) => {
    return {type: 'SET_USER_DATA', data: {id, email, login}}
}