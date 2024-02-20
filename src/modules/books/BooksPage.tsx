import { useState } from "react";
import BooksAddOrEditModal from "./components/BookAddOrEditModal";
import { Button, Modal } from "antd";
import IBook from "../../common/types/IBook";
import BooksListContainer from "./components/BooksListContainer";

const BooksPage = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editBook, setEditBook] = useState<IBook | undefined>(undefined);

    const modalTitle = editBook ? "Edit selected book" : "Add new book";

    const handleEdit = (bookToEdit: IBook) => {
        setEditBook(bookToEdit)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setEditBook(undefined)
        setIsModalOpen(false)
    }

    return (
        <>
            <Button style={{ marginBottom: '10px' }} type="primary" onClick={() => setIsModalOpen(true)}>
                Add new book
            </Button>
            <BooksListContainer handleEdit={handleEdit} />
            <Modal
                title={modalTitle}
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={handleCloseModal}
                footer={[]}>
                <BooksAddOrEditModal bookToEdit={editBook} key={editBook?.name} />
            </Modal>
        </>
    );
};

export default BooksPage;
