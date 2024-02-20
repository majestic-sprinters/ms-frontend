import { Button, Form, Input, InputNumber, Select } from "antd";
import IBook from "../../../common/types/IBook";
import { useCreateOrUpdateBook } from "../../../common/api/books";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import IUser from "../../../common/types/IUser";
import { useCreateOrUpdateUser } from "../../../common/api/users";

const userDefault: IUser = {
    username: "",
    fio: "",
    gender: "",
};

interface Props {
    userToEdit?: IUser;
}

const UserAddOrEditModal = ({ userToEdit }: Props): JSX.Element => {
    const isEditMode = !(typeof userToEdit === "undefined");
    const [form, setForm] = useState<IUser>(userToEdit ?? userDefault);

    const queryClient = useQueryClient();
    const { mutate, isLoading, isError } = useCreateOrUpdateUser(queryClient);

    const handleUserAdditionOrEditing = () => {
        const payload = { ...form };
        if (isEditMode) {
            payload.id = userToEdit.id;
        }
        mutate(payload);
    };

    const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <>
            <Form
                name="create-or-update-user"
                initialValues={{
                    remember: true,
                }}
                onSubmitCapture={handleUserAdditionOrEditing}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Enter username",
                        },
                    ]}>
                    <Input
                        name="username"
                        defaultValue={form.username}
                        placeholder="Username"
                        value={form.username}
                        onChange={(event) => handleFormChange(event)}
                    />
                </Form.Item>
                <Form.Item
                    name="fio"
                    rules={[
                        {
                            required: true,
                            message: "Enter fullname",
                        },
                    ]}>
                    <Input
                        name="fio"
                        defaultValue={form.fio}
                        placeholder="Fullname"
                        value={form.fio}
                        onChange={(event) => handleFormChange(event)}
                    />
                </Form.Item>
                <Form.Item
                    name="gender"
                    rules={[
                        {
                            required: true,
                            message: "Enter gender",
                        },
                    ]}>
                    <Select
                        defaultValue={form?.gender}
                        options={[{ value: 'MALE', label: 'Male' }, { value: 'FEMALE', label: 'Female' }]}
                        onChange={(value) => setForm({...form, gender: value})}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={isLoading}>
                        {isLoading
                            ? "Processing..."
                            : isEditMode
                            ? "Edit"
                            : "Add"}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default UserAddOrEditModal;
