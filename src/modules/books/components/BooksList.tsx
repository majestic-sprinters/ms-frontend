import { Button, List, Typography } from "antd";
import IBook from "../../../common/types/IBook";

interface Props {
    books: IBook[]
}

const BooksList = ({ books }: Props): JSX.Element => {
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
                    {/* <Button TODO: implemement edit
                        type="primary"
                        onClick={() => handleEdit(item, true)}>
                        Редактировать
                    </Button> */}
                    {/* <Button TODO: implemement delete
                        type="primary"
                        danger
                        onClick={() => handleDelete(item.id, true)}>
                        Удалить
                    </Button> */}
                </List.Item>
            )}
        />
    );
};

export default BooksList;
