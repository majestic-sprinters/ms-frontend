import { Button, List, Typography } from "antd";
import IUser from "../../../common/types/IUser";

interface Props {
    users: IUser[]
}

const UserList = ({ users }: Props): JSX.Element => {
    return (
        <List
            header={<Typography.Title level={5}>Books</Typography.Title>}
            bordered
            dataSource={users}
            renderItem={(item) => (
                <List.Item>
                    <Typography.Text>{item.username}</Typography.Text>
                    <Typography.Text>{item.fio}</Typography.Text>
                    <Typography.Text>{item.gender}</Typography.Text>
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

export default UserList;
