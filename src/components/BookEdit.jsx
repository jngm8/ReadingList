import React, {useState,useContext} from "react";
import BooksContext from "../context/books";


function BookEdit({book,onSubmit}) {

    const [title,setTitle] = useState(book.title);
    const {updateBook} = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        onSubmit(); // Just to go to the normal card without displating th edit
        updateBook(book.id,title);
    }


    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">Save</button>
        </form>
    
    )
}

export default BookEdit;