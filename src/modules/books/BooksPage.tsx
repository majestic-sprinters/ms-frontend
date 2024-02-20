import { useState } from "react";
import BooksAddOrEditModal from "./components/BookAddOrEditModal";
import { Button, Modal } from "antd";
import IBook from "../../common/types/IBook";
import BooksListContainer from "./components/BooksListContainer";

const BooksPage = (): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editBook, _] = useState<IBook | undefined>(undefined);

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
