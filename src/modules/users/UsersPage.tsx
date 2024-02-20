import { useState } from "react";
import BooksAddOrEditModal from "./components/BookAddOrEditModal";
import { Button, Modal } from "antd";
import IBook from "../../common/types/IBook";
import BooksListContainer from "./components/BooksListContainer";
import IUser from "../../common/types/IUser";
import UserAddOrEditModal from "./components/UserAddOrEditModal";
import UserListContainer from "./components/UserListContainer";

const UsersPage = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editUser, setEditUser] = useState<IUser | undefined>(undefined);

    const modalTitle = editUser ? "Edit selected user" : "Add new user";

    return (
        <>
            <Button style={{ marginBottom: '10px' }} type="primary" onClick={() => setIsModalOpen(true)}>
                Add new user
            </Button>
            <UserListContainer />
            <Modal
                title={modalTitle}
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                footer={[]}>
                <UserAddOrEditModal userToEdit={editUser} />
            </Modal>
        </>
    );
};

export default UsersPage;
