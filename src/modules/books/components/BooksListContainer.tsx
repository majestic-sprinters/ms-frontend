import BooksList from "./BooksList";
import { useGetBooks } from "../../../common/api/books";
import toastUtil from "../../../common/toastUtil";
import { List, Typography } from "antd";

const BooksListContainer = (): JSX.Element => {
    const {
        data: books,
        isLoading: isBooksLoading,
        isError: isBooksError,
    } = useGetBooks();

    if (isBooksLoading) {
        return <div>Loading...</div>;
    }

    if (isBooksError) {
        toastUtil.error("Error fetching books");
        return (
            <List
                header={
                    <Typography.Title level={5}>
                        Error fetching books
                    </Typography.Title>
                }
                bordered
                dataSource={[]}
                renderItem={(_) => <List.Item></List.Item>}
            />
        );
    }

    return <BooksList books={books ?? []} />;
};

export default BooksListContainer;
