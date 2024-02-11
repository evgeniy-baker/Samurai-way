import axios from "axios";
import {UserType} from "../redux/users-reducer";

export type getUsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: null
}

const instance = axios.create({baseURL: 'https://social-network.samuraijs.com/api/1.0/', withCredentials: true})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
        .then((res) => {
            return res.data
        })
}