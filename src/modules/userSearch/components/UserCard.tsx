import IUser from "../../../common/types/IUser";

interface Props {
    user: IUser;
}

const UserCard = ({ user }: Props) => {
    return (
        <>
            <h1>User</h1>
            <h1>Username: {user.username}</h1>
            <h1>Fullname: {user.fio}</h1>
            <h1>Gender: {user.gender}</h1>
        </>
    );
};

export default UserCard;
