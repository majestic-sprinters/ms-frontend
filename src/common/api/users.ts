import { QueryClient, useMutation, useQuery } from "react-query";
import apiClient from "./apiClient";
import IUser from "../types/IUser";

const USER_LIST_QUERY_KEY = ["users"];
const USER_QUERY_KEY = ["user"];

// #region allBooks
const fetchUsers = async (): Promise<IUser[]> => {
    const { data } = await apiClient.users.getAllUsers();
    return data;
};
export const useGetUsers = () => {
    return useQuery(USER_LIST_QUERY_KEY, () => fetchUsers());
};
// #endregion

// #region Create/Update
const createOrUpdateUser = async (payload: IUser) => {
    const { data } = await apiClient.users.createOrUpdate(payload);
    return data;
};
export const useCreateOrUpdateUser = (queryClient: QueryClient) => {
    return useMutation<IUser, Error, IUser>(createOrUpdateUser, {
        onSuccess: (_) => {
            // invalidate the query cache for 'books'
            queryClient.invalidateQueries(USER_LIST_QUERY_KEY);
        },
        onError: (_) => {
            // handle error
        },
    });
};
// #endregion

// #region Get User By Name
type getUserByNameParams = {
    username: string;
}
const fetchUserByUsername = async (params: getUserByNameParams): Promise<IUser> => {
    const { data } = await apiClient.users.getUserByUsername(params.username);
    return data;
};
export const useGetUserByUsername = (params: getUserByNameParams) => {
    return useQuery(USER_QUERY_KEY, () => fetchUserByUsername(params));
};
// #endregion

// #region Delete
const deleteUser = async (username: string) => {
    await apiClient.users.deleteUserByUsername(username);
};
export const useDeleteUser = (queryClient: QueryClient) => {
    return useMutation(deleteUser, {
        onSuccess: (_) => {
            // invalidate the query cache for 'users'
            queryClient.invalidateQueries(USER_LIST_QUERY_KEY);
        },
        onError: (_) => {
            // handle error
        },
    });
};
// #endregion
