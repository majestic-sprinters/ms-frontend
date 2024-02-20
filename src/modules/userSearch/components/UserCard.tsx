import IUser from "../../../common/types/IUser";

interface Props {
    user: IUser;
}

const UserCard = ({ user }: Props) => {
    return (
        <>
            <h1>User Card</h1>
            <h1>{user.username}</h1>
        </>
    );
};

export default UserCard;
