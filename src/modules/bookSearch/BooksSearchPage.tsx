import { useState } from "react";
import { Button, Input } from "antd";
import BookCard from "./components/BookCard";
import { useGetBookByName } from "../../common/api/books";

const BooksSearchPage = (): JSX.Element => {
    const [query, setQuery] = useState("");

    const {
        data: foundBook,
        isLoading,
        isError,
        refetch
    } = useGetBookByName({ name: query });

    return (
        <>
            <Input
                name="query"
                defaultValue={query}
                placeholder="Enter a book name"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <Button style={{ marginTop: "10px" }} type="primary" onClick={() => refetch()}>
                Search
            </Button>
            {isLoading ? (
                "Loading..."
            ) : !isError ? (
                <BookCard book={foundBook!!} />
            ) : (
                <h1>Such book was not found</h1>
            )}
        </>
    );
};

export default BooksSearchPage;
