import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from "react";

function BookList(){

    const {books} = useContext(BooksContext);

    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book}/>
    })


return (
    <div className="book-list">
        {renderBooks}
    </div>
)
}

export default BookList;