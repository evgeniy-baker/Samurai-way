const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: PhotosType,
    status: null,
    followed: boolean

    // id: number
    // photo: string
    // followed: boolean
    // fullName: string
    // status: string
    // location: LocationType
}
type PhotosType = {
    small: null,
    large: null
}
export type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: [
        // {id: 1, photo: 'https://www.svgrepo.com/show/475148/bird.svg', followed: false, fullName: 'Артём', status: 'offline', location: {city: 'Saint Petersburg', country: 'Russia'}},
        // {id: 2, photo: 'https://www.svgrepo.com/show/475148/bird.svg', followed: true, fullName: 'Айлин', status: 'online', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photo: 'https://www.svgrepo.com/show/475148/bird.svg', followed: false, fullName: 'Диана', status: 'offline', location: {city: 'Saint Petersburg', country: 'Russia'}},
        // {id: 4, photo: 'https://www.svgrepo.com/show/475148/bird.svg', followed: true, fullName: 'Герман', status: 'online', location: {city: 'Moscow', country: 'Russia'}}
    ]
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
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }

}

type ActionsType = FollowActionType | UnfollowActionType | SetUsers

type FollowActionType = {
    type: 'FOLLOW'
    userID: number
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    userID: number
}
type SetUsers = {
    type: 'SET_USERS'
    users: UserType[]
}

export const followActionCreator = (userID: number): ActionsType  => ({type: FOLLOW, userID})
export const unfollowActionCreator = (userID: number): ActionsType => ({type: UNFOLLOW, userID})
export const setUsersActionCreator = (users: any): ActionsType => ({type: SET_USERS, users})
