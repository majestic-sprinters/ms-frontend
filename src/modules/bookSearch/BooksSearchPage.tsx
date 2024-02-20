import { useState } from "react";
import IBook from "../../common/types/IBook";
import { Button, Input } from "antd";
import BookCard from "./components/BookCard";
import { useGetBookByName } from "../../common/api/books";

const tempBook: IBook = {
    name: "Harry Potter",
    author: "JK Rowling",
    description: "Wizards are unknown world for...",
    publisher: "London Printer x",
    year: 2000,
};

const BooksSearchPage = (): JSX.Element => {
    // const [foundBook, setFoundBook] = useState<IBook | undefined>(tempBook);
    const [query, setQuery] = useState("");
    // const [queryToSeachBy, setQuery] = useState("");

    const {
        data: foundBook,
        isLoading,
        isError,
    } = useGetBookByName({ name: query });

    return (
        <>
            <Input
                name="publisher"
                defaultValue={query}
                placeholder="Enter a book name"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            {/* TODO: remove
             <Button style={{ marginTop: "10px" }} type="primary" onClick={handleBookSearch}>
                Search
            </Button> */}
            {/* {foundBook ? (
                <BookCard book={tempBook} />
            ) : (
                <h1>Such book was not found</h1>
            )} */}
            {isLoading ? (
                "Loading..."
            ) : foundBook ? (
                <BookCard book={tempBook} />
            ) : (
                <h1>Such book was not found</h1>
            )}
        </>
    );
};

export default BooksSearchPage;
