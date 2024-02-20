import { useState } from "react";
import BooksAddOrEditModal from "./components/BookAddOrEditModal";
import BooksList from "./components/BooksList";
import { useGetBooks } from "../../common/api/books";
import toastUtil from "../../common/toastUtil";
import { Button, Modal } from "antd";
import IBook from "../../common/types/IBook";
import BooksListContainer from "./components/BooksListContainer";

const BooksPage = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editBook, setEditBook] = useState<IBook | undefined>(undefined);

    const modalTitle = editBook ? "Edit selected book" : "Add new book";

    return (
        <>
            <Button style={{ marginBottom: '10px' }} type="primary" onClick={() => setIsModalOpen(true)}>
                Add new book
            </Button>
            <BooksListContainer />
            <Modal
                title={modalTitle}
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                footer={[]}>
                <BooksAddOrEditModal bookToEdit={editBook} />
            </Modal>
        </>
    );
};

export default BooksPage;
