import IBook from "../../../common/types/IBook";

interface Props {
    book: IBook;
}

const BookCard = ({ book }: Props) => {
    return (
        <>
            <h1>Book Card</h1>
            <h1>{book.name}</h1>
        </>
    );
};

export default BookCard;
