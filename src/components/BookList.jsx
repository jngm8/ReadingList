import BookShow from "./BookShow";



function BookList({books,onDelete,onUpdate}){

    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate} />
    })

return (
    <div>
        {renderBooks}
    </div>
)
}

export default BookList;