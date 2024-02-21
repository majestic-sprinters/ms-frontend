import toastUtil from "../../../common/toastUtil";
import { List, Typography } from "antd";
import { useGetUsers } from "../../../common/api/users";
import UserList from "./UserList";
import IUser from "../../../common/types/IUser";

interface Props {
    handleEdit: (userToEdit: IUser) => void
}

const UserListContainer = ({ handleEdit }: Props): JSX.Element => {
    const {
        data,
        isLoading,
        isError,
    } = useGetUsers();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        toastUtil.error("Error fetching books");
        return (
            <List
                header={
                    <Typography.Title level={5}>
                        Error fetching users
                    </Typography.Title>
                }
                bordered
                dataSource={[]}
                renderItem={(_) => <List.Item></List.Item>}
            />
        );
    }

    return <UserList handleEdit={handleEdit} users={data ?? []} />;
};

export default UserListContainer;
