import { QueryClient, useMutation, useQuery } from "react-query";
import IBook from "../types/IBook";
import apiClient from "./apiClient";

const BOOK_LIST_QUERY_KEY = ["books"];
const BOOK_QUERY_KEY = ["book"];
const CREATE_BOOK_QUERY_KEY = "createBook";

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
    const { data } = await apiClient.books.getBookByName(params.name);
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
        onSuccess: (bookData) => {
            // invalidate the query cache for 'books'
            queryClient.invalidateQueries(BOOK_LIST_QUERY_KEY);
        },
        onError: (error) => {
            // handle error
        },
    });
};
// #endregion