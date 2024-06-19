import axios from "axios";
import {UserType} from "../redux/users-reducer";

type FollowResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
type getUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: null
}
export type AuthResponseType = {
    data: { id: string, login: string, email: string }
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
type UpdateResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e92b848e-e745-4d1e-a3aa-b5f0e891307a'
    }
})


export const getUsersAPI = (currentPage: number, pageSize: number) => {
    return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
        .then((res) => {
            return res.data
        })
}

export const followAPI = (userId: number) => {
    return instance.post<FollowResponseType>(`follow/${userId}`)
}

export const unfollowAPI = (userId: number) => {
    return instance.delete<FollowResponseType>(`follow/${userId}`)
}

export const getProfileAPI = (userID: number) => {
    return instance.get(`profile/${userID}`)
}

export const getAuthAPI = () => {
    return instance.get<AuthResponseType>('auth/me')
}

export const getStatusAPI = (userID: number) => {
    return instance.get(`profile/status/${userID}`)
}

export const updateStatusAPI = (status: string) => {
    return instance.put<UpdateResponseType>(`profile/status`, {status})
}

type LoginType = {
    email: string
    password: string
}

export const loginAPI = (data: LoginType) => {
    return instance.post<UpdateResponseType>(`auth/login`, data)
}