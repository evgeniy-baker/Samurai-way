const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: [
        {id: 1, followed: false, fullName: 'Артём', status: 'offline', location: {city: 'Saint Petersburg', country: 'Russia'}},
        {id: 2, followed: true, fullName: 'Айлин', status: 'online', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Диана', status: 'offline', location: {city: 'Saint Petersburg', country: 'Russia'}},
        {id: 4, followed: true, fullName: 'Герман', status: 'online', location: {city: 'Moscow', country: 'Russia'}},
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

        default:
            return state
    }

}

type ActionsType = FollowActionType | UnfollowActionType

type FollowActionType = {
    type: 'FOLLOW'
    userID: number
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    userID: number
}

export const followActionCreator = (userID: number): ActionsType  => ({type: FOLLOW, userID})
export const unfollowActionCreator = (userID: number): ActionsType => ({type: UNFOLLOW, userID})
