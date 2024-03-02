import axios from "axios";
import {UserType} from "../redux/users-reducer";

type ResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export type getUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: null
}

const instance = axios.create({baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '293a6fc0-ba25-4996-bbd5-4b6010333bd2'
    }
})

export const getUsersAPI = (currentPage: number, pageSize: number) => {
    return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
        .then((res) => {
            return res.data
        })
}

export const followAPI = (userId: number) => {
    return instance.post<ResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}

export const unfollowAPI = (userId: number) => {
    return instance.delete<ResponseType>(`follow/${userId}`)
}