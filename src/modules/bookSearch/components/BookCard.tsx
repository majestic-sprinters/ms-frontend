import IBook from "../../../common/types/IBook";

interface Props {
    book: IBook;
}

const BookCard = ({ book }: Props) => {
    return (
        <>
            <h1>Book</h1>
            <h1>Name: {book.name}</h1>
            <h1>Description: {book.description}</h1>
            <h1>Author: {book.author}</h1>
            <h1>Publisher: {book.publisher}</h1>
            <h1>Year: {book.year}</h1>
        </>
    );
};

export default BookCard;
