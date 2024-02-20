import { useState } from "react";
import IBook from "../../common/types/IBook";
import { Button, Input } from "antd";
import BookCard from "./components/BookCard";
import { useGetBookByName } from "../../common/api/books";
import IUser from "../../common/types/IUser";
import UserCard from "./components/UserCard";
import { useGetUserByUsername } from "../../common/api/users";

const tempUser: IUser = {
    username: 'raxkhman',
    fio: 'Abay Rakhman Abayuly',
    gender: 'MALE'
};

const UsersSearchPage = (): JSX.Element => {
    const [query, setQuery] = useState("");

    const {
        data: foundUser,
        isLoading,
        isError,
    } = useGetUserByUsername({ username: query });

    return (
        <>
            <Input
                name="query"
                defaultValue={query}
                placeholder="Enter username"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            {/* TODO: remove
             <Button style={{ marginTop: "10px" }} type="primary" onClick={handleBookSearch}>
                Search
            </Button> */}
            {/* {isLoading ? (
                "Loading..."
            ) : foundUser ? (
                <UserCard user={tempUser} />
            ) : (
                <h1>Such book was not found</h1>
            )} */}
            <UserCard user={tempUser} />
        </>
    );
};

export default UsersSearchPage;
