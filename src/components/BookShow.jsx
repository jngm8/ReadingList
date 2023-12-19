import React, {useState} from "react";
import BookEdit from "./BookEdit";

function BookShow({book,onDelete,onUpdate}){

    const [edit,setEdit] = useState(false);

    const onDeleteClick = () => {
        onDelete(book.id)
    }

    const onEditClick = () => {
        setEdit(!edit)
    }

    const handleSubmit = (id,newTitle) => {
        setEdit(false);
        onUpdate(id,newTitle);
    }

    let cardContent = <h3>{book.title}</h3>

    if (edit){
        cardContent = <BookEdit book={book} id={book.id} onSubmit={handleSubmit}/>
    }


    return (
        <div className="book-show">
            <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div>{cardContent}</div>
            <div className="actions">
                <button className="edit" onClick={onEditClick}>Edit</button>
                <button className="delete" onClick={onDeleteClick}> Delete </button>
            </div>
        </div>
    )
}

export default BookShow;