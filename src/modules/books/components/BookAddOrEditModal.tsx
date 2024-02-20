import { Button, Form, Input, InputNumber } from "antd";
import IBook from "../../../common/types/IBook";
import { useCreateOrUpdateBook } from "../../../common/api/books";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";

const bookDefault: IBook = {
    id: undefined,
    name: '',
    author: '',
    description: '',
    publisher: '',
    year: (new Date()).getFullYear()
}

interface Props {
    bookToEdit?: IBook;
}

const BooksAddOrEditModal = ({ bookToEdit }: Props): JSX.Element => {
    const isEditMode = !(typeof bookToEdit === 'undefined') 
    const [form, setForm] = useState<IBook>(bookToEdit ?? bookDefault)

    const queryClient = useQueryClient()
    const { mutate, isLoading } = useCreateOrUpdateBook(queryClient);

    const handleBookAdditionOrEditing = () => { 
        const payload = {...form}
        if (isEditMode) {
            payload.id = bookToEdit.id
        }
        mutate(payload)
    }

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <>
            <Form
                name="create-or-update-book"
                initialValues={{
                    remember: true,
                }}
                onSubmitCapture={handleBookAdditionOrEditing}>
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Enter name",
                        },
                    ]}>
                    <Input
                        disabled={isEditMode}
                        name="name"
                        defaultValue={form.name}
                        placeholder="Name"
                        value={form.name}
                        onChange={(event) => handleFormChange(event)}
                    />
                </Form.Item>
                <Form.Item
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Enter description",
                        },
                    ]}>
                    <Input
                        name="description"
                        defaultValue={form.description}
                        placeholder="Description"
                        value={form.description}
                        onChange={(event) => handleFormChange(event)}
                    />
                </Form.Item>
                <Form.Item
                    name="author"
                    rules={[
                        {
                            required: true,
                            message: "Enter author",
                        },
                    ]}>
                    <Input
                        name="author"
                        defaultValue={form.author}
                        placeholder="Author"
                        value={form.author}
                        onChange={(event) => handleFormChange(event)}
                    />
                </Form.Item>
                <Form.Item
                    name="publisher"
                    rules={[
                        {
                            required: true,
                            message: "Enter publisher",
                        },
                    ]}>
                    <Input
                        name="publisher"
                        defaultValue={form.publisher}
                        placeholder="Publisher"
                        value={form.publisher}
                        onChange={(event) => handleFormChange(event)}
                    />
                </Form.Item>
                <Form.Item
                    name="year"
                    rules={[
                        {
                            required: true,
                            message: "Enter year",
                        },
                    ]}>
                    <InputNumber
                        defaultValue={form.year}
                        placeholder="Year"
                        value={form.year}
                        onChange={(number) => setForm({...form, year: number??0})}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={isLoading}>
                        {isLoading ? "Processing..." : isEditMode ? "Edit" : "Add"}
                        </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default BooksAddOrEditModal
