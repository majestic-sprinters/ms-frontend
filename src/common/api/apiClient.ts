import axios, { AxiosResponse } from "axios"
import IUser from "../types/IUser"
import IBook from "../types/IBook"

const BASE_URL = import.meta.env.VITE_API_URL

const apiClient = {
    users: {
        createOrUpdate: async (request: IUser): Promise<AxiosResponse<IUser>> => {
            return await axios.post(`${BASE_URL}/api/v1/user/createOrUpdate`, request)
        },

        getAllUsers: async (): Promise<AxiosResponse<IUser[]>> => {
            return await axios.get(`${BASE_URL}/api/v1/user/getAllUsers`)
        },

        getUserByUsername: async (username: string): Promise<AxiosResponse<IUser>> => {
            return await axios.get(`${BASE_URL}/api/v1/user/getUserByUsername/${username}`)
        },

        deleteUserByUsername: async (username: string): Promise<AxiosResponse<void>> => {
            return await axios.delete(`${BASE_URL}/api/v1/user/deleteUserByUsername/${username}`)
        },
    },

    books: {
        createOrUpdate: async (request: IBook): Promise<AxiosResponse<IBook>> => {
            return await axios.post(`${BASE_URL}/api/v1/book/createOrUpdate`, request)
        },

        getBooks: async (): Promise<AxiosResponse<IBook[]>> => {
            return await axios.get(`${BASE_URL}/api/v1/book/getBooks`)
        },

        getBookByName: async (name: string): Promise<AxiosResponse<IBook>> => {
            return await axios.get(`${BASE_URL}/api/v1/book/getBookByName/${name}`)
        },

        deleteBookByName: async (name: string): Promise<AxiosResponse<void>> => {
            return await axios.delete(`${BASE_URL}/api/v1/user/deleteBookByName/${name}`)
        },
    }
}

export default apiClient
