import "./App.css";
import { useGetBooks } from "./common/api/getBooks";

const App = () => {
    const {
        data: books,
        isLoading: isBooksLoading,
        isError: isBooksError,
    } = useGetBooks();

    if (isBooksLoading) {
        return <div>Loading...</div>;
    }

    if (isBooksError) {
        return <div>Error fetching user</div>;
    }

    return (
        <>
            <ul>
                {books?.map((item) => {
                    return <li>{item.name}</li>;
                })}
            </ul>
        </>
    );
};

export default App;
