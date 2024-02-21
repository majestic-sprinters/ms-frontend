import { QueryClient, useMutation, useQuery } from "react-query";
import IBook from "../types/IBook";
import apiClient from "./apiClient";

const BOOK_LIST_QUERY_KEY = ["books"];
const BOOK_QUERY_KEY = ["book"];

// #region allBooks
const fetchBooks = async (): Promise<IBook[]> => {
    const { data } = await apiClient.books.getBooks();
    return data;
};
export const useGetBooks = () => {
    return useQuery(BOOK_LIST_QUERY_KEY, () => fetchBooks());
};
// #endregion

// #region Book by name
type getBookByNameParams = {
    name: string;
}
const fetchBookByName = async (params: getBookByNameParams): Promise<IBook> => {
    const name = params.name.replace(' ', '%20')
    const { data } = await apiClient.books.getBookByName(name);
    return data;
};
export const useGetBookByName = (params: getBookByNameParams) => {
    return useQuery(BOOK_QUERY_KEY, () => fetchBookByName(params));
};
// #endregion

// #region Create/Update
const createOrUpdateBook = async (payload: IBook) => {
    const { data } = await apiClient.books.createOrUpdate(payload);
    return data;
};
export const useCreateOrUpdateBook = (queryClient: QueryClient) => {
    return useMutation<IBook, Error, IBook>(createOrUpdateBook, {
        onSuccess: (_) => {
            // invalidate the query cache for 'books'
            queryClient.invalidateQueries(BOOK_LIST_QUERY_KEY);
        },
        onError: (_) => {
            // handle error
        },
    });
};
// #endregion

// #region Delete
const deleteBook = async (name: string) => {
    await apiClient.books.deleteBookByName(name);
};
export const useDeleteBook = (queryClient: QueryClient) => {
    return useMutation(deleteBook, {
        onSuccess: (_) => {
            // invalidate the query cache for 'books'
            queryClient.invalidateQueries(BOOK_LIST_QUERY_KEY);
        },
        onError: (_) => {
            // handle error
        },
    });
};
// #endregion
