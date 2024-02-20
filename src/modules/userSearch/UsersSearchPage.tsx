import { useState } from "react";
import { Button, Input } from "antd";
import UserCard from "./components/UserCard";
import { useGetUserByUsername } from "../../common/api/users";

const UsersSearchPage = (): JSX.Element => {
    const [query, setQuery] = useState("");

    const {
        data,
        isLoading,
        isError,
        refetch
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
            <Button style={{ marginTop: "10px" }} type="primary" onClick={() => refetch()}>
                Search
            </Button>
            {isLoading ? (
                "Loading..."
            ) : !isError ? (
                <UserCard user={data!!} />
            ) : (
                <h1>Such user was not found</h1>
            )}
        </>
    );
};

export default UsersSearchPage;
