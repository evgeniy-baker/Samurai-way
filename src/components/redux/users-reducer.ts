const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: PhotosType,
    status: null,
    followed: boolean
}
type PhotosType = {
    small: null,
    large: null
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map(u => u.id === action.userID ?
                    {...u, followed: true} : u)}

        case UNFOLLOW:
            return {...state,
                users: state.users.map(u => u.id === action.userID ?
                    {...u, followed: false} : u)}

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }

}



type ActionsType = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT

type FollowAT = {
    type: 'FOLLOW'
    userID: number
}
type UnfollowAT = {
    type: 'UNFOLLOW'
    userID: number
}
type SetUsersAT = {
    type: 'SET_USERS'
    users: UserType[]
}
type SetCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetTotalUsersCountAT = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}
type ToggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}

export const followAC = (userID: number): ActionsType  => ({type: FOLLOW, userID})
// изменение подписки
export const unfollowAC = (userID: number): ActionsType => ({type: UNFOLLOW, userID})
// изменение подписки
export const setUsersAC = (users: any): ActionsType => ({type: SET_USERS, users})
// сетаем всех пользователей
export const setCurrentPageAC = (currentPage: number): ActionsType => ({type: SET_CURRENT_PAGE, currentPage})
// изменение текущей страницы пользователей
export const setTotalUsersCountAC = (totalUsersCount: number): ActionsType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
// установить общее кол-во пользователей
export const toggleIsFetchingAC = (isFetching: boolean): ActionsType => ({type: TOGGLE_IS_FETCHING, isFetching})
// изменение отображения загрузки