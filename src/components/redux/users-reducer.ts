const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

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
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1
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

        default:
            return state
    }

}

type ActionsType = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT

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

export const followAC = (userID: number): ActionsType  => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number): ActionsType => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: any): ActionsType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): ActionsType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): ActionsType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})