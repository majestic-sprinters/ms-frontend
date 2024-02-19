import { useQuery } from "react-query";
import IBook from "../types/IBook";
import apiClient from "./apiClient";

const QUERY_KEY = ["books"];

const fetchBooks = async (): Promise<IBook[]> => {
    const { data } = await apiClient.books.getBooks();
    return data;
};

export const useGetBooks = () => {
    return useQuery(QUERY_KEY, () => fetchBooks());
};
