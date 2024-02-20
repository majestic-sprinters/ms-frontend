import { useState } from "react";
import { Button, Modal } from "antd";
import IUser from "../../common/types/IUser";
import UserAddOrEditModal from "./components/UserAddOrEditModal";
import UserListContainer from "./components/UserListContainer";

const UsersPage = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editUser, setEditUser] = useState<IUser | undefined>(undefined);

    const modalTitle = editUser ? "Edit selected user" : "Add new user";

    const handleEdit = (userToEdit: IUser) => {
        setEditUser(userToEdit)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setEditUser(undefined)
        setIsModalOpen(false)
    }

    return (
        <>
            <Button style={{ marginBottom: '10px' }} type="primary" onClick={() => setIsModalOpen(true)}>
                Add new user
            </Button>
            <UserListContainer handleEdit={handleEdit} />
            <Modal
                title={modalTitle}
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={handleCloseModal}
                footer={[]}>
                <UserAddOrEditModal userToEdit={editUser} key={editUser?.username} />
            </Modal>
        </>
    );
};

export default UsersPage;
