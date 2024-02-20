import { Button, List, Typography } from "antd";
import IUser from "../../../common/types/IUser";
import { useQueryClient } from "react-query";
import { useDeleteUser } from "../../../common/api/users";

interface Props {
    users: IUser[],
    handleEdit: (userToEdit: IUser) => void
}

const UserList = ({ users, handleEdit }: Props): JSX.Element => {

    const queryClient = useQueryClient()
    const { mutate } = useDeleteUser(queryClient)

    const handleDelete = (username: string) => {
        mutate(username)
    }

    return (
        <List
            header={<Typography.Title level={5}>Users</Typography.Title>}
            bordered
            dataSource={users}
            renderItem={(item) => (
                <List.Item>
                    <Typography.Text>{item.username}</Typography.Text>
                    <Typography.Text>{item.fio}</Typography.Text>
                    <Typography.Text>{item.gender}</Typography.Text>
                    <Button
                        type="primary"
                        onClick={() => handleEdit(item)}>
                        Edit
                    </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => handleDelete(item.username)}>
                        Delete
                    </Button>
                </List.Item>
            )}
        />
    );
};

export default UserList;
