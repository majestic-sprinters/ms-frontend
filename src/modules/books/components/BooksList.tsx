import { Button, List, Typography } from "antd";
import IBook from "../../../common/types/IBook";
import { useDeleteBook } from "../../../common/api/books";
import { useQueryClient } from "react-query";

interface Props {
    books: IBook[],
    handleEdit: (bookToEdit: IBook) => void
}

const BooksList = ({ books, handleEdit }: Props): JSX.Element => {

    const queryClient = useQueryClient()
    const { mutate } = useDeleteBook(queryClient)

    const handleDelete = (name: string) => {
        mutate(name)
    }

    return (
        <List
            header={<Typography.Title level={5}>Books</Typography.Title>}
            bordered
            dataSource={books}
            renderItem={(item) => (
                <List.Item>
                    <Typography.Text>{item.name}</Typography.Text>
                    <Typography.Text>{item.description}</Typography.Text>
                    <Typography.Text>{item.author}</Typography.Text>
                    <Typography.Text>{item.publisher}</Typography.Text>
                    <Typography.Text>{item.year}</Typography.Text>
                    <Button
                        type="primary"
                        onClick={() => handleEdit(item)}>
                        Edit
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => handleDelete(item.name)}>
                        Delete
                    </Button>
                </List.Item>
            )}
        />
    );
};

export default BooksList;
