import { useState } from "react"
import BooksAddOrEditModal from "./components/BookAddOrEditModal"
import BooksList from "./components/BooksList"
import { useGetBooks } from "../../common/api/books";

const BooksPage = (): JSX.Element => {

    const {
        data: books,
        isLoading: isBooksLoading,
        isError: isBooksError,
    } = useGetBooks();

    if (isBooksLoading) {
        return <div>Loading...</div>;
    }

    if (isBooksError) {
        return <div>Error fetching books</div>;
    }

    return (
        <>
        <BooksAddOrEditModal/>
        <br />
        <BooksList books={books!!} />       
        </>
    )
}

export default BooksPage
