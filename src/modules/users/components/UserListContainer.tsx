import toastUtil from "../../../common/toastUtil";
import { List, Typography } from "antd";
import { useGetUsers } from "../../../common/api/users";
import UserList from "./UserList";

const UserListContainer = (): JSX.Element => {
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
                renderItem={(item) => <List.Item></List.Item>}
            />
        );
    }

    return <UserList users={data ?? []} />;
};

export default UserListContainer;
