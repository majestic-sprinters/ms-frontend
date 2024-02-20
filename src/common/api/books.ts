import { QueryClient, useMutation, useQuery } from "react-query";
import IBook from "../types/IBook";
import apiClient from "./apiClient";

const BOOK_LIST_QUERY_KEY = ["books"];
const CREATE_BOOK_QUERY_KEY = "createBook";

const fetchBooks = async (): Promise<IBook[]> => {
    const { data } = await apiClient.books.getBooks();
    return data;
};
export const useGetBooks = () => {
    return useQuery(BOOK_LIST_QUERY_KEY, () => fetchBooks());
};

const createOrUpdateBook = async (payload: IBook) => {
    const { data } = await apiClient.books.createOrUpdate(payload);
    return data;
};
export const useCreateOrUpdateBook = (queryClient: QueryClient) => {
    return useMutation<IBook, Error, IBook>(createOrUpdateBook, {
        onSuccess: (bookData) => {
            // invalidate the query cache for 'books'
            queryClient.invalidateQueries(BOOK_LIST_QUERY_KEY);
        },
        onError: (error) => {
            // handle error
        },
    });
};
